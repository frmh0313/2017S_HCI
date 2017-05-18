function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(init);

function init() {
    var bar = d3.select('#barchart');
    var bar_width = 500, bar_height = 330;
    var margin_bar = {left: 50, top: 50 };

    genre_sales_data.forEach(function(d) {
        d['수익'] = parseFloat(d['수익'])
    });

    var x1 = d3.scale.linear()
        .domain([0, 80000])
        .range([0, bar_width]);
        // .range([margin_bar.left, bar_width + margin_bar.left])

    var y1 = d3.scale.ordinal()
        .domain(['드라마', '액션', '호러', '스릴러', '코미디', '어드벤처'])
        .rangePoints([20, 270])

    bar.selectAll('rect')
        .data(genre_sales_data)
        .enter()
        .append('rect')
        .attr('height', 40)
        .attr('width', function(d, i) {
            return x1(d['수익']);
        })
        .attr('x', margin_bar.left)
        .attr('y', margin_bar.top)
        .style('fill', 'steelblue')
        .attr('transform', function(d, i) {
            return 'translate(0, ' + i * 50 + ')';
        });


    var xAxis1 = d3.svg.axis()
        .scale(x1)

        .orient('bottom');

    bar.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate('+margin_bar.left + ',' +(bar_height + margin_bar.top - 40) + ')')
        .call(xAxis1);

    var yAxis1 = d3.svg.axis()
        .scale(y1)
        .orient('left');

    bar.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + margin_bar.left + ', '+margin_bar.top+')')
        .call(yAxis1);

    bar.append('text')
        .attr('x', (bar_width/2))
        .attr('y', 30)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('text-decoration', 'underline')
        .text('장르별 전세계 수익')

    bar.append('text')
        .attr('x', margin_bar.left)
        .attr('y', bar_height+50)
        .attr('width', 250)
        .attr('dy', '0em')
        .style('font-size', '12px')
        .text("주어진 데이터에서 장르별 전세계 수익의 합을 보여준다.")

    bar.append('text')
        .attr('x', margin_bar.left)
        .attr('y', bar_height+50)
        .attr('font-size', '12px')
        .attr('dy', '1.2em')
        .text('코미디, 액션, 어드벤처, 드라마, 스릴러, 호러 순으로 수익이 높다.')

    var scatter = d3.select('#scatter');
    var scatter_width = 500, scatter_height = 400;
    var margin_scatter = {left: 50};
    data.forEach(function(d) {
        d['IMDB 평점'] = parseFloat(d['IMDB 평점']);
        d['수익(전세계)'] = parseFloat(d['수익(전세계)']);
    });


    var x2 = d3.scale.linear()
        .domain([
            d3.min(data, function(d) { return d['IMDB 평점'];}),
            d3.max(data, function(d) { return d['IMDB 평점'];})
        ])
        .range([margin_scatter.left, scatter_width + margin_scatter.left]);

    var y2 = d3.scale.linear()
        .domain([
            d3.min(data, function(d) { return d['수익(전세계)']}),
            d3.max(data, function(d) { return d['수익(전세계)']})
        ])
        .range([scatter_height, 0]);

    var color = d3.scale.ordinal()
        .domain(['드라마', '액션', '호러', '스릴러', '코미디', '어드벤처'])
        .range(['#3366cc', '#353535', '#ff9900', '#b55826', '#62c0eb', '#166a64'])

    scatter.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('r', 3.5)
        .attr('cx', function(d) { return x2(d['IMDB 평점']); })
        .attr('cy', function(d) { return y2(d['수익(전세계)']); })
        .style('fill', function(d) { return color(d['장르']); });

    var xAxis2 = d3.svg.axis()
        .scale(x2)
        .orient('bottom');

    scatter
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,'+ scatter_height + ')')
        .call(xAxis2)

    var yAxis2 = d3.svg.axis()
        .scale(y2)
        .orient('left')

    scatter
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate('+margin_scatter.left + ', 0)')
        .call(yAxis2)

    scatter.append('text')
        .attr('x', scatter_width/2)
        .attr('y', 30)
        .attr('text-anchor', 'middle')
        .style('font-size', '16px')
        .style('text-decoration', 'underline')
        .text('평점과 전세계 수익')

    scatter.append('text')
        .attr('x', margin_scatter.left)
        .attr('y', scatter_height + 50)
        .attr('dy', '0em')
        .style('font-size', '12px')
        .text('평점과 영화의 전세계 수익의 관계를 대략적으로 파악할 수 있다.')

    scatter.append('text')
        .attr('x', margin_scatter.left)
        .attr('y', scatter_height+50)
        .attr('dy', '1.2em')
        .style('font-size', '12px')
        .text('대체로 높은 수익을 거둔 영화들은 평점이 6.5 정도는 넘지만,')

    scatter.append('text')
        .attr('x', margin_scatter.left)
        .attr('y', scatter_height+50)
        .attr('dy', '2.4em')
        .style('font-size', '12px')
        .text('평점이 그 정도를 초과하지만 상대적으로 높은 수익을 거두지 못한 영화도 많음을 알 수 있다 ')

    scatter.append('text')
        .attr('x', margin_scatter.left)
        .attr('y', scatter_height+50)
        .attr('dy', '3.6em')
        .style('font-size', '12px')
        .text('색깔로는 영화의 장르를 표현했다. ')
}
