
function register(acceptsFn, factoryFn) {
    // acceptsFn(specline, metadata)
    //   return true if associated factoryFn can
    //   produce a widget for this specline
    // factoryFn(specline, metadata)
    //   produce an object to manage a widget
    //   this should expose the following functions:
    //     initialize(parent, width, height);
    //     update(outgoing, current, incoming);
    //     dispose();
    // TODO: spec out interactivity
}


function ofField(field) {
    return function(item) {
        return item[field];
    };
}

function buildXScale(data, field, range) {
    return d3.scale.linear()
        .domain(d3.extent(data, ofField(field)))
        .range(range);
}

function buildYScale(data, field, range) {
    return d3.scale.linear()
        .domain(d3.extent(data, ofField(field)))
        .rangeRound(range);
}

function createBarChart(specline, metadata, data) {
    /* */
}
