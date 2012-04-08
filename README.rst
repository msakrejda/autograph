Spec Syntax
-----------

The spec syntax is intended to provide a simple way to configure
the included widgets

Examples:

  * bar
  * bar with col1 as x, col2 as y
  * bar per col3 with col1 as x, col2 as y
  * line with col1 as x; col2, col4 as y; col3 as y2
  * pie with col1 as category, col2 as weight
  * table
  * plot
  * bubble
  * hloc


Widget API
----------

Widgets should respond to the following callback:

::.

  onUpdate(exiting, current, entering)

where exiting is the set of data currently being aged out,
current is the current set of data (including new data), and
entering is the new data

TODO:
 - data pipe
   - better fake data generation
   - generalization to data sources
   - backend connection
 - general
   - better axes (smoother, rolling adjustments to range)
   - axis titles / labels
   - tooltips / datatips
 - bars
   - grouping / stacking / 100% stacking 
 - area
   - stacking / 100% stacking
 - pie
 - table
 - tag cloud
 - line