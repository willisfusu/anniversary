function init() {
  logo("#logo");
}
function supportsSVG() {
  return !!document.createElementNS && !!document
    .createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect;
}

function logo(el) {
  if (!supportsSVG()) { return; }

  var data = [
      [-9,2,0],[-9,0,0],[-9,-2,0],[-9,-4,0],[-9,-6,0],
      [-7,2,0],[-7,-2,0],[-7,-4,0],
      [-5,2,0],[-5,0,0],[-5,-4,0],[-5,-6,0],

      [-2,0,0],[-2,-2,0],[-2,-4,0],[-2,-6,0],
      [2,0,0],[2,-2,0],[2,-4,0],[0,-6,0],[4,-6,2],

      [7,4,2],[7,0,0],[7,-2,0],[7,-4,0],[7,-6,0]
  ];
  var letter = ["b", "u", "g"],
      space  = 25,
      power  = -400,
      cell   = 9,
      pad    = 1,
      w      = cell*7+space*1.5,
      h      = cell*5+space*0.5,
      tx     = Math.round(2.5*cell+space),
      ty     = Math.round(2*cell),
      N      = data.length,
      nodes  = data.slice();
  // fade out pre-existing background image
   // initialize logo
  var svg = d3.select(el)
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  var g = svg.append("g")
    .attr("transform", "translate("+tx+","+ty+")");

  var lr = g.selectAll("rect")
    .data(nodes)
   .enter().append("rect")
    .attr("class", function(d) { return "logo-"+letter[d[2]]; })
    .attr("x", function(d) { return d.x = Math.round(d[0]/2*cell); })
    .attr("y", function(d) { return d.y = Math.round(d[1]/2*-cell); })
    .attr("width", (cell - pad))
    .attr("height", (cell - pad));

//   // add force layout interaction
  function make(o) { return {x:o.x, y:o.y, fixed:true, radius:0}; }
    nodes.push.apply(nodes, nodes.map(make));
  nodes.unshift(make({x:10000, y:10000}));
  var links = d3.range(N).map(function(i) {
      return {source:i+1, target:i+N+1};
  });
  var force = d3.layout.force()
    .gravity(0)
    .charge(function(d, i) { return i ? 0 : power; })
    .linkDistance(0.2)
    .nodes(nodes)
    .links(links)
    .start()
    .on("tick", function() {
      for (var i=0, q=d3.geom.quadtree(nodes); i<N; ++i) {
        q.visit(logo_collide(nodes[i+1]));
      }
      lr.attr("x", function(d) { return Math.round(d.x); })
        .attr("y", function(d) { return Math.round(d.y); });
    });
//

//
  function move() {
     var p1 = d3.mouse(this);
    nodes[0].px = p1[0] - tx;
    nodes[0].py = p1[1] - ty;
    force.resume();
  }
  function off() {
    nodes[0].px = nodes[0].py = 10000;
    force.resume();
  }
//
  svg
    .on("mousemove", move)
    .on("touchmove", move)
    .on("mouseout", off)
    .on("touchend", off);

function logo_collide(node) {
        var r = node.radius + 16,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
    return function (quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== node)) {
            var x = node.x - quad.point.x,
                y = node.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = node.radius + quad.point.radius;
            if (l < r) {
                l = (l - r) / l * .5;
                node.x -= x *= l;
                node.y -= y *= l;
                quad.point.x += x;
                quad.point.y += y;
            }
        }
        return x1 > nx2
            || x2 < nx1
            || y1 > ny2
            || y2 < ny1;
    };
}
}

