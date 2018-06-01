function printCircle(num, val) {
  const svgContainer = d3.select('body').append('svg')
    .attr('width', 200)
    .attr('height', 200);

  const circles = svgContainer.selectAll('circle')
    .data([num])
    .enter()
    .append('circle');

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
  const text = svgContainer.selectAll('text')
    .data([{
      val,
      num,
    }])
    .enter()
    .append('text');

  // Add SVG Text Element Attributes
  text
    .attr('x', d => d.num - 10)
    .attr('y', d => d.num + 10)
    .text(d => `${d.val}`)
    .attr('font-family', 'sans-serif')
    .attr('font-size', '20px')
    .attr('fill', 'red');
}

const LinkedList = (node) => {
  const head = node;

  const findNode = (newNode, current) => (
    (current.next === null) ?
      current : findNode(newNode, current.next)
  );

  const print = (num = 30, current = head) => {
    current.print(num);
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
  const print = num => printCircle(num, val);

  return {
    val,
    next,
    print,
  };
};

export function removeDuplicates() {
  function removeDupsRec(node, foundMap) {
    if (node.next === null) {
      return;
    }

    if (foundMap[node.next.value]) {
      node.next = node.next.next;
    } else {
      foundMap[node.next.value] = true;
    }

    if (node.next !== null) {
        removeDupsRec(node.next, foundMap);
    }
  }

  function removeDups(list) {
    // create a hash to store found values
    // tranverse the list
    // if next node's value is not in the hash, add it and continue
    // if it's in the hash, remove the next node

    const { head } = list;
    const foundMap = {
      [head.val]: true,
    };

    removeDupsRec(head, foundMap);
  }

  const head = Node(42);
  const children = [
    Node(50),
    Node(50),
    Node(250),
    Node(42),
    Node(300),
    Node(300),
  ];

  const list = LinkedList(head);
  children.map(child => list.addNode(child));

  console.log(list);
  list.print();
  removeDups(list);
  list.print();
}

export function getKthToLast() {
  // Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
  function kTh(list, k) {
    const { head } = list;
    let runner = head;
    let slower = head;
    let count = 0;

    while (runner.next !== null && count < k) {
      runner = runner.next;
      count++;
    }

    // this is incorrect if there are less that K elements
    if (runner.next === null) {
      return runner;
    }

    while (runner.next !== null) {
      runner = runner.next;
      slower = slower.next;
    }

    return slower;
  }

  const head = Node(42);
  const children = [
    Node(50),
    Node(50),
    Node(250),
    Node(42),
    Node(300),
    Node(300),
  ];

  const list = LinkedList(head);
  children.map(child => list.addNode(child));

  const kthNode = kTh(list, 6);
  kthNode.print(30);
}

export function deleteMiddleNode() {
  function deleteMiddle(node) {
    if (node.next !== null) {
      node.val = node.next.val;
      node.next = node.next.next;
    }
  }

  const head = Node(42);
  const children = [
    Node(25),
    Node(50),
    Node(250),
    Node(42),
    Node(300),
    Node(300),
  ];

  const list = LinkedList(head);
  children.map(child => list.addNode(child));

  deleteMiddle(children[2]);
  console.log(list);
}


