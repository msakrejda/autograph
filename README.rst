Autograph
=========

Autograph is a simple reporting tool for visualizing live or static
data. It provides "widgets" to offer different representations of the
underlying data, and allows these widgets to be assembled into reports.

Autograph is *not* a general-purpose charting library. It offers some
configurability in its widgets, especially in purely aesthetic
aspects, but it attempts to follow best practices in information
design rather than giving the user a free hand (e.g., there is no
attempt at 3D effects in charts, which typically distort the viewer's
perception of the actual meaning of chart elements).

Spec Syntax
-----------

The spec syntax is intended to provide a simple way to configure
the included widgets.

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

Widgets should respond to the following callbacks:

::.

  initialize(parent, width, height);
  onUpdate(exiting, current, entering)
  dispose();

The `initialize` callback will include a reference to the parent
element and a designated width and height. Note that the widget will
also have access to the spec line and the data feed metadata from the
factory function (TODO: unify these).

The `onUpdate` callback is called whenever data changes. If the set of
data is static, the function is only called once. The arguments
give additional information about the change in data. Note that


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
