Element & Node

Element:
Represents HTML elements only.
    - <div>
    - <p> dll.
Properties/Methods: Has basic properties/methods (nodeValue, nodeType, childNodes).

Node:
Represents everything in the DOM (elements, text, attributes, comments, etc.).
    - Text content
    - Attributes
    - Comments
Properties/Methods: Inherits from Node and adds element-specific methods (e.g., getAttribute, setAttribute).

- Use `childNodes` to access all types of nodes.
- Use `children` to access only the child elements.

Element vs Node:
    - Element: Represents HTML elements.
    - Node: Represents everything in the DOM.



