document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sort-select').addEventListener('change', function() {
      sortTable(this.value);
    });
  
    function sortTable(column) {
      var container = document.getElementById('pro');
      var boxes = Array.from(container.getElementsByClassName('box'));
  
      boxes.sort(function(a, b) {
        var aValue, bValue;
  
        if (column === 'date') {
          aValue = new Date(a.getAttribute('data-date'));
          bValue = new Date(b.getAttribute('data-date'));
        } else if (column === 'price') {
          aValue = parseFloat(a.getAttribute('data-price'));
          bValue = parseFloat(b.getAttribute('data-price'));
        } else if (column === 'category') {
          aValue = a.getAttribute('data-category');
          bValue = b.getAttribute('data-category');
        }
  
        if (aValue < bValue) {
          return -1;
        } else if (aValue > bValue) {
          return 1;
        } else {
          return 0;
        }
      });
  
      boxes.forEach(function(box) {
        container.appendChild(box);
      });
    }
  });
  
  