function printCircle(num, val) {
  const spaceCircles = [30, 70, 110, 150];

  const svgContainer = d3.select('body').append('svg')
    .attr('width', 200)
    .attr('height', 200);

  const circles = svgContainer.selectAll('circle')
    .data([num])
    .enter()
    .append('circle')

  circles
    .attr('cx', d => d)
    .attr('cy', d => d)
    .attr('r', 20)
    .style('fill', (d) => {
      let returnColor = null;

      if (d % 3) {
        returnColor = 'green';
      } else if (d % 2) {
        returnColor = 'purple';
      } else if (d % 5) {
        returnColor = 'red';
      } else {
        returnColor = 'black';
      }

      return returnColor;
    });

  // Add the SVG Text Element to the svgContainer
//  const text = svgContainer.selectAll('text')
//    .data([val])
//    .enter()
//    .append('text');
//
//  // Add SVG Text Element Attributes
//  text
//    .attr('x', function(d) { return d.cx; })
//    .attr('y', function(d) { return d.cy; })
//    .text( function (d) { return '( ' + d.cx + ', ' + d.cy +' )'; })
//    .attr('font-family', 'sans-serif')
//    .attr('font-size', '20px')
//    .attr('fill', 'red');
}

const LinkedList = (node) => {
  const head = node;

  const findNode = (newNode, current) => (
    (current.next === null) ?
      current : findNode(newNode, current.next)
  );

  const print = (num = 30, current = head) => {
    printCircle(current.val);
    if (current.next !== null) {
      print(num, current.next);
    }
  };

  return {
    head: node,
    addNode: (newNode) => {
      const place = findNode(newNode, head);
      place.next = newNode;
    },
    print,
  };
};

const Node = (value) => {
  const val = value;
  const next = null;

  return {
    val,
    next,
  };
};

export function removeDuplicates() {
  const head = Node(42);
  const node2 = Node(50);
  const node3 = Node(250);
  const node4 = Node(300);
  const list = LinkedList(head);

  list.addNode(node2);
  list.addNode(node3);
  list.addNode(node4);
  console.log(list);
  list.print(30);
}

export function getKthToLast() {
}

