getBookmarks();

function getBookmarks() {
  browser.bookmarks.getTree().then(displayBookmarks).catch(handleError);
}
var opendetails = false;
function displayBookmarks(bookmarkTreeNodes) {
  const bookmarkList = document.getElementById("bookmarkList");
  bookmarkList.innerHTML = "";
  console.log(bookmarkTreeNodes[0].children[1]);
  bookmarkTreeNodes[0].children[1].children.map((node) => {
    opendetails = true;
    displayNode(node, bookmarkList);
  });
}

function displayNode(node, parentElement) {
  if (node.children) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = node.title || "Unnamed Folder";
    details.appendChild(summary);
    if (opendetails == true) {
      details.setAttribute("open", "true");
      opendetails = false;
    }

    const ul = document.createElement("ul");
    node.children.forEach(function (childNode) {
      displayNode(childNode, ul);
    });
    details.appendChild(ul);
    parentElement.appendChild(details);
  } else if (node.url) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = node.url;
    a.textContent = node.title || node.url;
    a.target = "_blank";
    li.appendChild(a);
    parentElement.appendChild(li);
  }
}

function handleError(error) {
  console.error(`Error: ${error}`);
}
