define( ["qlik", "jquery", "text!./testing.css",".FileSaver.js-master/dist/FileSaver.js"], function ( qlik, $, cssContent,FileSaver) {
	'use strict';
	$( "<style>" ).html( cssContent ).appendTo( "head" );

        return {
            definition: {
				type: "items",
				component: "accordion",
				items: {
					dimensions: {
						uses: "dimensions"
					},
					measures: {
						uses: "measures",
						min: "0"
					},
					sorting: {
						uses: "sorting"
					},
					appearance: {
						uses: "settings"
					}
				}
			},
			initialProperties: {
				qHyperCubeDef: {
					qDimensions: [],
					qMeasures: [],
					qInitialDataFetch: [
						{
							qWidth: 10,
							qHeight: 100
						}
					]
				}
			},
			
			paint: function ( $element, layout ) {
				var hc = layout.qHyperCube;
				var app = qlik.currApp();
				var　i = 0;
				console.log( app);
		var hypercube = hc.qDataPages[0].qMatrix;
				
				$element.empty();
				var script ='<script src="FileSaver.js"></script>';
				//script += '<script type="text/javascript">var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});saveAs(blob, "hello world.txt");</script>';
				// var　i = 0;
				// if(i = 0){
				console.log(i);
				var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
				saveAs(blob, "hello world.txt");
				i +=i;
				// }
				

				var table = '<table border="1" >';
					table += '<thead>';
						table += "<tr class='yellow'>";
						console.log('qDimensionInfo '+hc.qDimensionInfo.length);
							for (var i = 0; i < hc.qDimensionInfo.length; i++) {
								table += '<th>' + hc.qDimensionInfo[i].qFallbackTitle + '</th>';
							}
							console.log('qMeasureInfo '+hc.qMeasureInfo.length);
							
									for (var j = 0; j < hc.qMeasureInfo.length; j++) {
										table += '<th>' + hc.qMeasureInfo[j].qFallbackTitle + '</th>';
									}

							console.log('Test Object here :) ',layout.qHyperCube.qDataPages[0].qMatrix);
						table += '</tr>';
					table += '</thead>';
					table += '<tbody>';

						// iloop all rows
						for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) {
							table += "<tr class='blue'>";

							// loop all cells within a row
							for (var c = 0; c < hc.qDataPages[0].qMatrix[r].length; c++) {
								table += '<td>';
									table += hc.qDataPages[0].qMatrix[r][c].qText;
								table += '</td>';
							}
							table += '</tr>';
						}
					table += '</tbody>';
				table += '</table>';
				$element.append( script );
				$element.append( table );
			}
        };
    } );