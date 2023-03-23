# react-virtualization

The efficient rendering of large lists.

## Behind the scenes of react-virtualization

React virtuaization helps in efficient rendering of tabular data or lists. It uses scrollTop and height of the outer-div, total length of lists and the height of each lists in deriving the start and end index of lists we only want to be in the DOM.

```
    const startIndex = Math.max(0, Math.floor(scrollTop / listHeight) - 3);
  const endIndex = Math.min(
    Math.floor((scrollTop + outerDivHeight) / listHeight) + 3,
    lists.length
  );

```
