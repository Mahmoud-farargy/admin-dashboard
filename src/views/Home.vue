<template>
  <div id="home" class="fade show">
    <!-- status widgets -->
    <div class="mt-4 status--list row">
      <div
        v-for="(item, idx) in status"
        :key="item.id || idx"
        class="col-sm-6 col-lg-3"
      >
        <div class="card status--item">
          <div class="card-body status--item--inner flex-row">
            <v-icon>mdi-{{ item.icon }}</v-icon>
            <div class="status--item--info flex-column">
              <h4>${{ item.figure | formatNumber }}</h4>
              <span class="small">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- charts widgets -->
    <div class="card mt-10">
      <div class="card-body">
        <div class="chart--top--info row">
          <div class="chart-title col-lg-6">
            <h4 class="card-title">Traffic</h4>
            <small class="small">December 2022</small>
          </div>
          <div class="col-lg-6">
            <div
              class="chart--period btn-group"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                disabled="disabled"
                class="btn btn-outline-secondary"
              >
                Day
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Month
              </button>
              <button
                type="button"
                disabled="disabled"
                class="btn btn-outline-secondary"
              >
                Year
              </button>
            </div>
          </div>
        </div>
        <DashLineChart
          :chartData="{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            sets: [
              {
                label: 'Investments',
                backgroundColor: '#e6f1f8',
                borderColor: '#321fdb',
                pointHoverBackgroundColor: '#321fdb',
                borderWidth: 2,
                data: [
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                ],
                fill: true,
              },
              {
                label: 'Sales',
                backgroundColor: 'transparent',
                borderColor: '#2eb85c',
                pointHoverBackgroundColor: '#2eb85c',
                borderWidth: 2,
                data: [
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                  randomNum(50, 200),
                ],
              },
              {
                label: 'Limit',
                backgroundColor: 'transparent',
                borderColor: '#e55353',
                pointHoverBackgroundColor: '#e55353',
                borderWidth: 1,
                borderDash: [8, 5],
                data: [65, 65, 65, 65, 65, 65, 65],
              },
            ],
          }"
          :isDay="true"
        />
      </div>
    </div>
    <!-- social widgets -->
    <div class="mt-10 socials--outer--container row">
      <div
        v-for="(item, idx) in socials"
        :key="item.id || idx"
        class="col-sm-6 col-lg-3"
      >
        <div class="card socials">
          <div class="card-header" :style="{ background: item.bgColor }">
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </div>
          <div class="card-body socials--inner row">
            <div class="col">
              <h4>${{ item.friends | formatNumber }}</h4>
              <span class="text-muted text-uppercase small">Friends</span>
            </div>
            <div class="col">
              <h4>${{ item.meetings | formatNumber }}</h4>
              <span class="text-muted text-uppercase small">Feeds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- revenue & earnings widgets -->
    <div class="mt-10 bottom--widgets">
      <div class="revenue--w">
        <div class="revenue--w--inner">
          <div>
            <div class="card">
            <div class="card-header">
                  Orders
            </div>
              <div class="card-body">
                <div class="revenue--item flex-column">
                  <h2 class="revenue--figure">{{randomNum(1100, 3000) | formatNumber}}</h2>
                  <svg id="SvgjsSvg3333" width="189" height="126.8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG3335" class="apexcharts-inner apexcharts-graphical" transform="translate(14.5, 0)"><defs id="SvgjsDefs3334"><clipPath id="gridRectMasko1r4e49h"><rect id="SvgjsRect3337" width="164" height="128" x="-2" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMasko1r4e49h"><rect id="SvgjsRect3338" width="164" height="132" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG3339" class="apexcharts-pie"><g id="SvgjsG3340" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle3341" r="37.98536585365854" cx="80" cy="64" fill="transparent"></circle><g id="SvgjsG3342" class="apexcharts-slices"><g id="SvgjsG3343" class="apexcharts-series apexcharts-pie-series" seriesName="App" rel="1" data:realIndex="0"><path id="SvgjsPath3344" d="M 69.85216991000085 6.448795702018273 A 58.43902439024391 58.43902439024391 0 1 1 73.79003134337525 122.10813936934534 L 75.96352037319392 101.77029059007447 A 37.98536585365854 37.98536585365854 0 1 0 73.40391044150056 26.591717206311877 L 69.85216991000085 6.448795702018273 z" fill="#28c76f66" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="196.1" data:startAngle="-10" data:strokeWidth="0" data:value="53" data:pathOrig="M 69.85216991000085 6.448795702018273 A 58.43902439024391 58.43902439024391 0 1 1 73.79003134337525 122.10813936934534 L 75.96352037319392 101.77029059007447 A 37.98536585365854 37.98536585365854 0 1 0 73.40391044150056 26.591717206311877 L 69.85216991000085 6.448795702018273 z"></path></g><g id="SvgjsG3345" class="apexcharts-series apexcharts-pie-series" seriesName="Service" rel="2" data:realIndex="1"><path id="SvgjsPath3346" d="M 73.79003134337525 122.10813936934534 A 58.43902439024391 58.43902439024391 0 0 1 26.90766845477986 88.41974411774098 L 45.489984495606905 79.87283367653163 A 37.98536585365854 37.98536585365854 0 0 0 75.96352037319392 101.77029059007447 L 73.79003134337525 122.10813936934534 z" fill="#28c76f33" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="59.20000000000002" data:startAngle="186.1" data:strokeWidth="0" data:value="16" data:pathOrig="M 73.79003134337525 122.10813936934534 A 58.43902439024391 58.43902439024391 0 0 1 26.90766845477986 88.41974411774098 L 45.489984495606905 79.87283367653163 A 37.98536585365854 37.98536585365854 0 0 0 75.96352037319392 101.77029059007447 L 73.79003134337525 122.10813936934534 z"></path></g><g id="SvgjsG3347" class="apexcharts-series apexcharts-pie-series" seriesName="Product" rel="3" data:realIndex="2"><path id="SvgjsPath3348" d="M 26.90766845477986 88.41974411774098 A 58.43902439024391 58.43902439024391 0 0 1 79.98980046617915 5.56097649983333 L 79.99337030301645 26.014634724891664 A 37.98536585365854 37.98536585365854 0 0 0 45.489984495606905 79.87283367653163 L 26.90766845477986 88.41974411774098 z" fill="rgba(40,199,111,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="114.69999999999999" data:startAngle="245.3" data:strokeWidth="0" data:value="31" data:pathOrig="M 26.90766845477986 88.41974411774098 A 58.43902439024391 58.43902439024391 0 0 1 79.98980046617915 5.56097649983333 L 79.99337030301645 26.014634724891664 A 37.98536585365854 37.98536585365854 0 0 0 45.489984495606905 79.87283367653163 L 26.90766845477986 88.41974411774098 z"></path></g></g></g><g id="SvgjsG3349" class="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style="opacity: 1;"><text id="SvgjsText3350" font-family="Helvetica, Arial, sans-serif" x="80" y="79" text-anchor="middle" dominant-baseline="auto" font-size="16px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-datalabel-label" style="font-family: Helvetica, Arial, sans-serif; fill: rgba(40, 199, 111, 0.4);">App</text><text id="SvgjsText3351" font-family="Helvetica, Arial, sans-serif" x="80" y="65" text-anchor="middle" dominant-baseline="auto" font-size="20px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-datalabel-value" style="font-family: Helvetica, Arial, sans-serif;">53%</text></g></g><line id="SvgjsLine3353" x1="0" y1="0" x2="160" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG3336" class="apexcharts-annotations"></g></svg>
                  <span class="small text-muted"><strong>68.2%</strong> more earnings <br /> than last month.</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card">
            <div class="card-header">
                  Profit
            </div>
              <div class="card-body">
                <div class="revenue--item flex-column">
                    <h2 class="revenue--figure">{{randomNum(1100, 3000) | formatNumber}}</h2>
                    <svg id="SvgjsSvg3271" width="168" height="70" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG3273" class="apexcharts-inner apexcharts-graphical" transform="translate(12, 0)"><defs id="SvgjsDefs3272"><clipPath id="gridRectMaskdn556v6e"><rect id="SvgjsRect3278" width="153" height="68" x="-3.5" y="-1.5" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskdn556v6e"><rect id="SvgjsRect3279" width="158" height="77" x="-6" y="-6" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine3277" x1="145.5" y1="0" x2="145.5" y2="65" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="145.5" y="0" width="1" height="65" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG3296" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG3297" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText3299" font-family="Helvetica, Arial, sans-serif" x="0" y="94" text-anchor="middle" dominant-baseline="auto" font-size="0px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan3300">1</tspan><title>1</title></text><text id="SvgjsText3302" font-family="Helvetica, Arial, sans-serif" x="29.199999999999996" y="94" text-anchor="middle" dominant-baseline="auto" font-size="0px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan3303">2</tspan><title>2</title></text><text id="SvgjsText3305" font-family="Helvetica, Arial, sans-serif" x="58.4" y="94" text-anchor="middle" dominant-baseline="auto" font-size="0px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan3306">3</tspan><title>3</title></text><text id="SvgjsText3308" font-family="Helvetica, Arial, sans-serif" x="87.60000000000001" y="94" text-anchor="middle" dominant-baseline="auto" font-size="0px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan3309">4</tspan><title>4</title></text><text id="SvgjsText3311" font-family="Helvetica, Arial, sans-serif" x="116.80000000000001" y="94" text-anchor="middle" dominant-baseline="auto" font-size="0px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan3312">5</tspan><title>5</title></text><text id="SvgjsText3314" font-family="Helvetica, Arial, sans-serif" x="146" y="94" text-anchor="middle" dominant-baseline="auto" font-size="0px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan3315">6</tspan><title>6</title></text></g></g><g id="SvgjsG3317" class="apexcharts-grid"><g id="SvgjsG3318" class="apexcharts-gridlines-horizontal"></g><g id="SvgjsG3319" class="apexcharts-gridlines-vertical"><line id="SvgjsLine3320" x1="0" y1="0" x2="0" y2="65" stroke="#ebebeb" stroke-dasharray="5" class="apexcharts-gridline"></line><line id="SvgjsLine3321" x1="29.2" y1="0" x2="29.2" y2="65" stroke="#ebebeb" stroke-dasharray="5" class="apexcharts-gridline"></line><line id="SvgjsLine3322" x1="58.4" y1="0" x2="58.4" y2="65" stroke="#ebebeb" stroke-dasharray="5" class="apexcharts-gridline"></line><line id="SvgjsLine3323" x1="87.6" y1="0" x2="87.6" y2="65" stroke="#ebebeb" stroke-dasharray="5" class="apexcharts-gridline"></line><line id="SvgjsLine3324" x1="116.8" y1="0" x2="116.8" y2="65" stroke="#ebebeb" stroke-dasharray="5" class="apexcharts-gridline"></line></g><line id="SvgjsLine3327" x1="0" y1="65" x2="146" y2="65" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine3326" x1="0" y1="1" x2="0" y2="65" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG3280" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG3281" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath3295" d="M 0 65L 29.200000000000003 39L 58.400000000000006 58.5L 87.60000000000001 26L 116.80000000000001 45.5L 146 6.5" fill="none" fill-opacity="1" stroke="rgba(0,207,232,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="3" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMaskdn556v6e)" pathTo="M 0 65L 29.200000000000003 39L 58.400000000000006 58.5L 87.60000000000001 26L 116.80000000000001 45.5L 146 6.5" pathFrom="M -1 65L -1 65L 29.200000000000003 65L 58.400000000000006 65L 87.60000000000001 65L 116.80000000000001 65L 146 65"></path><g id="SvgjsG3282" class="apexcharts-series-markers-wrap" data:realIndex="0"><g id="SvgjsG3284" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskdn556v6e)"><circle id="SvgjsCircle3285" r="2" cx="0" cy="65" class="apexcharts-marker no-pointer-events whnp2b5ii" stroke="#00cfe8" fill="#00cfe8" fill-opacity="1" stroke-width="2" stroke-opacity="1" rel="0" j="0" index="0" default-marker-size="2"></circle><circle id="SvgjsCircle3286" r="2" cx="29.200000000000003" cy="39" class="apexcharts-marker no-pointer-events whz52gbnd" stroke="#00cfe8" fill="#00cfe8" fill-opacity="1" stroke-width="2" stroke-opacity="1" rel="1" j="1" index="0" default-marker-size="2"></circle></g><g id="SvgjsG3287" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskdn556v6e)"><circle id="SvgjsCircle3288" r="2" cx="58.400000000000006" cy="58.5" class="apexcharts-marker no-pointer-events w1qk90dui" stroke="#00cfe8" fill="#00cfe8" fill-opacity="1" stroke-width="2" stroke-opacity="1" rel="2" j="2" index="0" default-marker-size="2"></circle></g><g id="SvgjsG3289" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskdn556v6e)"><circle id="SvgjsCircle3290" r="2" cx="87.60000000000001" cy="26" class="apexcharts-marker no-pointer-events wr76umdq7" stroke="#00cfe8" fill="#00cfe8" fill-opacity="1" stroke-width="2" stroke-opacity="1" rel="3" j="3" index="0" default-marker-size="2"></circle></g><g id="SvgjsG3291" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskdn556v6e)"><circle id="SvgjsCircle3292" r="2" cx="116.80000000000001" cy="45.5" class="apexcharts-marker no-pointer-events w4k9paxeu" stroke="#00cfe8" fill="#00cfe8" fill-opacity="1" stroke-width="2" stroke-opacity="1" rel="4" j="4" index="0" default-marker-size="2"></circle></g><g id="SvgjsG3293" class="apexcharts-series-markers" clip-path="url(#gridRectMarkerMaskdn556v6e)"><circle id="SvgjsCircle3294" r="5" cx="146" cy="6.5" class="apexcharts-marker no-pointer-events w09mgw5o5" stroke="#00cfe8" fill="#ffffff" fill-opacity="1" stroke-width="2" stroke-opacity="1" rel="5" j="5" index="0" default-marker-size="5"></circle></g></g></g><g id="SvgjsG3283" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine3329" x1="0" y1="0" x2="146" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG3330" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG3331" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG3332" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect3276" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG3316" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG3274" class="apexcharts-annotations"></g></svg>
                    <span class="small text-muted"><strong>32.2%</strong> more earnings <br /> than last month.</span>
                </div>
                </div>
            </div>
          </div>
        </div>

        <div class="trans--w">
          <div class="card">
            <div class="card-header">
              Transactions
            </div>
            <div class="card-body">
                <div class="trans--inner flex-column">
                  <ul>
                      <li v-for="(item, idx) in transactions" :key="item.title + idx">
                         <div class="trans--item flex-row">
                              <div class="trans--item--info flex-row">
                                <span v-if="item.bgColor && item.color" :style="{backgroundColor: item.bgColor}" class="trans--avatar rounded">
                                    <v-icon :style="{color: item.color}">mdi-{{item.icon}}</v-icon>
                                </span>
                                <div class="trans--info--body flex-column">
                                    <strong>{{item.title}}</strong>
                                    <span class="small text-muted">{{item.description}}</span>
                                </div>
                              </div>
                              <span v-if="item.figure" class="trans__figure" :style="{color: item.figure <= 0 ? '#ea5455': '#28c76f'}">
                                ${{item.figure}}
                              </span>
                         </div>
                      </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="earning--w">
        <div class="card">
          <header class="card-header">Earnings</header>
          <div class="earning--w--inner card-body">
            <div class="">
              <div class="row">
                <div class="col-sm-6">
                  <div class="callout">
                    <small class="text-muted">New Clients</small><br /><strong
                      class="h4"
                      >9,123</strong
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="callout">
                    <small class="text-muted">Recurring Clients</small
                    ><br /><strong class="h4">22,643</strong>
                  </div>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">Monday</span>
                </div>
                <div class="progress-group-bars">
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="34"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 34%"
                    ></div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 78%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">Tuesday</span>
                </div>
                <div class="progress-group-bars">
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="56"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 56%"
                    ></div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="94"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 94%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">Wednesday</span>
                </div>
                <div class="progress-group-bars">
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="12"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 12%"
                    ></div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 67%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">Thursday</span>
                </div>
                <div class="progress-group-bars">
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="43"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 43%"
                    ></div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="91"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 91%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">Friday</span>
                </div>
                <div class="progress-group-bars">
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="22"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 22%"
                    ></div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="73"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 73%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">Saturday</span>
                </div>
                <div class="progress-group-bars">
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="53"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 53%"
                    ></div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="82"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 82%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">Sunday</span>
                </div>
                <div class="progress-group-bars">
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="9"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 9%"
                    ></div>
                  </div>
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      aria-valuenow="69"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 69%"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="legend text-center">
                <small
                  ><sup class="px-1"
                    ><span class="badge badge-info badge-pill"
                      >&nbsp;</span
                    ></sup
                  >New clients &nbsp;<sup class="px-1"
                    ><span class="badge badge-danger badge-pill"
                      >&nbsp;</span
                    ></sup
                  >Recurring clients</small
                >
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script >
import Vue from "vue";
import { randomNum } from "@/utilities/tools";
import DashLineChart from "@/components/Chart/Line-chart.vue";

export default Vue.extend({
  name: "Home",
  components: {
    DashLineChart,
  }, 
  data() {
    return {
      transactions: [
          {
            title: "wallet",
            description: "starbucks",
            icon: "clipboard-check-outline",
            bgColor: "rgba(115,103,240,.12)",
            figure: randomNum(-20, 500),
            color: "#7367f0"
          },
            {
            title: "Bank transfer",
            description: "add money",
            icon: "check",
            bgColor: "rgba(40,199,111,.12)",
            figure: -65,
            color: "#28c76f"
          },
          {
            title: "paypal",
            description: "transfer money",
            icon: "currency-usd",
            bgColor: "rgba(234,84,85,.12)",
            figure: randomNum(-20, 500),           
            color: "#ea5455"
          },
          {
            title: "mastercard",
            description: "ordered food",
            icon: "credit-card-outline",
            bgColor: "rgba(255,159,67,.12)",
            figure: -26,
            color: "#ff9f43"
          },
            {
            title: "transfer",
            description: "refund",
            icon: "trending-up",
            bgColor: "rgba(0,207,232,.12)",
            figure: randomNum(-20, 500),
            color: "#00cfe8"
          }
      ],
      status: [
        {
          id: "fwehfowoiefwe",
          title: "Total Sales",
          figure: 1995,
          icon: "shopping-outline",
        },
        {
          id: "foiwhfwfkrhge",
          title: "Daily Visits",
          figure: 2051,
          icon: "cart-minus",
        },
        {
          id: "pqufqb3ihggey",
          title: "Total Income",
          figure: 2632,
          icon: "currency-usd",
        },
        {
          id: "fyrgfqyfvfwuj",
          title: "Total Orders",
          figure: 1746,
          icon: "clipboard-outline",
        },
      ],
      socials: [
        {
          id: "foweiflwekfjg",
          friends: 89094,
          meetings: 363,
          icon: "facebook",
          bgColor: "#4267B2",
        },
        {
          id: "opruogihwkggw",
          friends: 987365,
          meetings: 30,
          icon: "twitter",
          bgColor: "#1DA1F2",
        },
        {
          id: "onflvskdlvskf",
          friends: 7498,
          meetings: 8,
          icon: "linkedin",
          bgColor: "#2867B2",
        },
        {
          id: "ioewgfiwubiwr",
          friends: 27,
          meetings: 4,
          icon: "calendar-month",
          bgColor: "rgb(245, 172, 38)",
        },
      ],
    };
  },
  methods: {
    randomNum,
  },
});
</script>
<style lang="scss" scoped>
#home {
  .chart--period {
    margin-bottom: 0.8rem;
  }
  @media (min-width: 800px) {
    .chart--period {
      float: right;
      margin-bottom: 0;
    }
  }
  .chart--top--info {
    gap: 1rem 0;
  }
  .chart-title {
    h4 {
      margin-bottom: 0;
      font-weight: var(--font-weight-medium);
      font-size: 1.3125rem;
      line-height: 1.2;
    }
    small {
      font-size: 80%;
      font-weight: var(--font-weight);
      color: var(--txt-muted);
    }
  }
  .status--list{
    gap: 0.9rem 0;
  }
  .status--item {
    position: static;
    box-shadow: var(--box-shadow);
    background: var(--ultra-white);
    overflow: hidden;
    &:hover {
      .status--item--inner {
        i,
        h4,
        span {
          color: #fff;
        }
        &::before {
          transform: scale(3);
        }
      }
    }
    .status--item--inner {
      position: relative;
      align-items: center;
      gap: 0.5rem 1rem;
      transition: color 0.8s ease 0s;
      color: var(--seconday-clr);
      z-index: 0;
      i {
        color: inherit;
        font-size: 1.67rem;
      }
      span {
        color: var(--txt-muted);
      }
      &:before {
        content: "";
        position: absolute;
        padding-top: 100%;
        width: 100%;
        left: -50%;
        top: 0;
        transform: scale(0);
        transition: transform 0.8s ease 0s;
        background-image: linear-gradient(
          to top right,
          var(--primary-clr),
          var(--second-clr)
        );
        border-radius: 50%;
        z-index: -1;
      }
    }
  }
  .socials--outer--container {
    row-gap: 1.5rem;
  }
  .socials {
    .card-header {
      display: block;
      height: 100px;
      display: grid;
      place-content: center;
      color: var(--ultra-white);
      i {
        color: inherit;
        font-size: 3rem;
      }
    }
    .socials--inner div {
      text-align: center;
      h4 {
        font-size: 1.3125rem;
        font-weight: 600;
      }
      &:nth-child(1) {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          right: 0;
          height: 80%;
          top: 50%;
          background: rgba(0, 0, 21, 0.2);
          width: 1px;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .bottom--widgets {
    margin-bottom: 3rem;
    .card-header {
      padding: 0.75rem 1.2rem;
      background-color: var(--ultra-white);
    }
    .card {
      height: 100%;
    }
    &,
    .revenue--w,
    .revenue--w--inner {
      row-gap: 1rem;
      column-gap: 1rem;
    }
    .revenue--w {
      display: grid;
      grid-area: r;
      grid-template-columns: 1fr;
      grid-template-areas:
        "j j j j j j j j j j j j"
        "i i i i i i i i i i i i"
        "i i i i i i i i i i i i";

      .revenue--w--inner {
        display: grid;
        grid-area: j;
        grid-template-columns: repeat(1fr, 1fr);
        grid-template-areas:
          "k k k k k k s s s s s s"
          "k k k k k k s s s s s s"
          "k k k k k k s s s s s s";
        div {
          &:nth-child(1) {
            grid-area: k;
          }
          &:nth-child(2) {
            grid-area: s;
          }
        }
        .revenue--item{
          height: 100%;
          font-weight: var(--font-weight-medium);
          text-transform: capitalize;
          text-align: center;
          align-items: center;
          justify-content: center;
          // svg{
          //   width: 130px;
          // }
          span{
            margin-top: 0.5rem;
          }
          .revenue--figure{
            font-weight: 600;
            margin-bottom: 1rem;
          }
        }
      }
      .trans--w {
        grid-area: i;
        .trans--inner{
          justify-content: center;
          ul{
            padding: 0.1rem;
            list-style: none;
            margin-bottom: 0;
            li{
              &:last-of-type{
                .trans--item{
                  margin-bottom: 0;
                }
              }
              .trans--item{
                margin-bottom: 1.5rem;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .trans--avatar{
                  display: grid;
                  place-items: center;
                  width: 42px;
                  height: 42px;
                  overflow: hidden;
                }
                .trans__figure{
                  font-weight: 600;
                }
                .trans--item--info{
                    .trans--avatar{
                      margin-right: 1rem;
                    }
                    .trans--info--body{
                      text-transform: capitalize;
                    }
                }
              }
            }
          }
        }
      }
    }
    .earning--w{
        .badge{
          border-radius: 50%;
        }
        .badge-info{
            background-color: var(--info);
        }
        .badge-danger{
            background-color: #e55353;
        }
        .progress-group-bars .progress:not(:last-child) {
          margin-bottom: 2px;
        }
        .callout{
          text-align: center;
        }
    }
    @media (min-width: 1150px) {
      display: grid;
      grid-row: 1;
      grid-template-columns: repeat(minmax(400px, 300), 2fr);
      grid-template-rows: 100%;
      grid-template-areas:
        "r r r r e e e e e e e e"
        "r r r r e e e e e e e e"
        "r r r r e e e e e e e e";
      .earning--w {
        height: 100%;
        grid-area: e;
      }
    }
    @media only screen and (max-width: 1150px) and (min-width: 870px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 870px) {
      .card {
        height: auto;
      }
      &,
      .revenue--w,
      .revenue--w--inner,
      .revenue--w--inner:nth-child(1),
      .revenue--w--inner:nth-child(2) {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        gap: 1rem;
      }
    }
  }
}
</style>