document.addEventListener('DOMContentLoaded', function() {
    // Data organization by continents
    const countriesByContinent = {
        'Europa': {
            countries: ['España', 'Albania', 'Alemania', 'Andorra', 'Austria', 'Belarús', 'Bélgica', 'Bosnia y Herzegovina', 
                       'Bulgaria', 'Croacia', 'Dinamarca', 'Eslovenia', 'Estonia', 'Finlandia', 'Francia', 'Grecia', 
                       'Hungría', 'Irlanda', 'Islandia', 'Italia', 'Letonia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 
                       'Macedonia', 'Malta', 'Moldavia', 'Mónaco', 'Montenegro', 'Noruega', 'Países Bajos', 'Polonia', 
                       'Portugal', 'Reino Unido', 'República Checa', 'República Eslovaca', 'Rumanía', 'Rusia', 'Serbia', 
                       'Suecia', 'Suiza', 'Ucrania'],
            values: [13223, 72, 35258, 16, 2486, 105, 4053, 89, 2837, 103, 1139, 245, 187, 1607, 5610, 275, 1364, 
                    1896, 162, 18219, 418, 10, 371, 110, 18, 25, 253, 6, 8, 3683, 3097, 3485, 4640, 31778, 1318, 
                    1183, 7320, 2194, 269, 2398, 1804, 724]
        },
        'América': {
            countries: ['Antigua y Barbuda', 'Argentina', 'Bahamas', 'Barbados', 'Belice', 'Bolivia', 'Brasil', 'Canadá', 
                       'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Dominica', 'Ecuador', 'El Salvador', 'Estados Unidos', 
                       'Granada', 'Guatemala', 'Guyana', 'Haití', 'Honduras', 'Jamaica', 'México', 'Nicaragua', 'Panamá', 
                       'Paraguay', 'Perú', 'República Dominicana', 'San Cristóbal y Nieves', 'San Vicente y las Granadinas', 
                       'Santa Lucía', 'Surinam', 'Trinidad y Tobago', 'Uruguay', 'Venezuela'],
            values: [0, 11520, 0, 2, 3, 3425, 2938, 146, 2410, 18057, 66, 12053, 25, 4217, 68, 678, 2, 232, 4, 12, 
                    446, 14, 633, 96, 101, 1513, 2408, 2141, 0, 0, 0, 4, 7, 6302, 10148]
        },
        'África': {
            countries: ['Angola', 'Argelia', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Camerún', 
                       'Chad', 'Comores', 'Congo', 'Costa de Marfil', 'Djibouti', 'Egipto', 'Eritrea', 'Etiopía', 
                       'Gabón', 'Gambia', 'Ghana', 'Guinea', 'Guinea Ecuatorial', 'Guinea-Bissau', 'Kenia', 'Lesotho', 
                       'Liberia', 'Libia', 'Madagascar', 'Malawi', 'Mali', 'Marruecos', 'Mauricio', 'Mauritania', 
                       'Mozambique', 'Namibia', 'Níger', 'Nigeria', 'República Centroafricana', 'República Democrática del Congo', 
                       'Ruanda', 'Santo Tomé y Príncipe', 'Senegal', 'Seychelles', 'Sierra Leona', 'Somalia', 'Sudáfrica', 
                       'Sudán', 'Swazilandia', 'Tanzania', 'Togo', 'Túnez', 'Uganda', 'Zambia', 'Zimbabwe'],
            values: [96, 590, 10, 0, 10, 2, 367, 59, 1, 0, 35, 71, 2, 58, 3, 12, 6, 130, 526, 609, 368, 646, 51, 0, 
                    73, 11, 8, 5, 286, 16055, 11, 2755, 53, 6, 5, 1410, 9, 17, 9, 20, 2726, 4, 222, 5, 129, 13, 0, 
                    15, 25, 69, 11, 7, 11]
        },
        'Asia': {
            countries: ['Afganistán', 'Arabia Saudí', 'Armenia', 'Azerbaiyán', 'Bahrein', 'Bangladesh', 'Brunei', 'Camboya', 
                       'China', 'Chipre', 'Corea', 'Corea del Norte', 'Emiratos Árabes Unidos', 'Filipinas', 'Georgia', 
                       'India', 'Indonesia', 'Irán', 'Iraq', 'Israel', 'Japón', 'Jordania', 'Kazajstán', 'Kirguistán', 
                       'Kuwait', 'Laos', 'Líbano', 'Malasia', 'Maldivas', 'Mongolia', 'Myanmar', 'Nepal', 'Omán', 'Pakistán', 
                       'Qatar', 'Singapur', 'Siria', 'Sri Lanka', 'Tadyikistán', 'Tailandia', 'Taiwán', 'Timor Oriental', 
                       'Turkmenistán', 'Turquía', 'Uzbekistán', 'Vietnam', 'Yemen'],
            values: [10, 6, 23, 6, 1, 176, 1, 3, 7272, 20, 478, 33, 3, 1747, 69, 3298, 109, 158, 51, 66, 141, 50, 51, 
                    5, 13, 2, 148, 44, 0, 13, 2, 125, 1, 404, 5, 38, 66, 41, 0, 156, 11, 0, 1, 109, 11, 70, 1]
        },
        'Oceanía': {
            countries: ['Australia', 'Fiji', 'Islas Cook', 'Islas Marshall', 'Islas Salomón', 'Micronesia', 'Nauru', 
                       'Nueva Zelanda', 'Palaos', 'Papúa Nueva Guinea', 'Samoa', 'Tonga', 'Tuvalu', 'Vanuatu'],
            values: [83, 2, 0, 0, 0, 0, 0, 22, 1, 1, 0, 0, 1, 0]
        }
    };

    // Yearly data
    const yearlyData = {
        '2015': {
            'Europa': {
                countries: ['Alemania', 'Austria', 'Bélgica', 'Bulgaria', 'Francia', 'Irlanda', 'Italia', 'Países Bajos', 'Polonia', 'Rumanía', 'Reino Unido'],
                values: [1806, 147, 422, 248, 654, 177, 6768, 308, 389, 505, 2182]
            },
            'África': {
                countries: ['Camerún', 'Marruecos', 'Mauritania', 'Senegal'],
                values: [0, 688, 199, 142]
            },
            'América': {
                countries: ['Argentina', 'Brasil', 'Colombia', 'Cuba', 'Venezuela'],
                values: [368, 193, 432, 2195, 3189]
            },
            'Asia': {
                countries: ['China', 'India'],
                values: [314, 173]
            }
        },
        '2016': {
            'Europa': {
                countries: ['Alemania', 'Austria', 'Bélgica', 'Bulgaria', 'Francia', 'Irlanda', 'Italia', 'Países Bajos', 'Polonia', 'Rumanía', 'Reino Unido'],
                values: [2289, 180, 462, 238, 702, 259, 7208, 364, 476, 586, 2579]
            },
            'África': {
                countries: ['Camerún', 'Marruecos', 'Mauritania', 'Senegal'],
                values: [4, 759, 162, 263]
            },
            'América': {
                countries: ['Argentina', 'Brasil', 'Colombia', 'Cuba', 'Venezuela'],
                values: [530, 288, 1555, 2549, 5637]
            },
            'Asia': {
                countries: ['China', 'India'],
                values: [397, 204]
            }
        },
        '2017': {
            'Europa': {
                countries: ['Alemania', 'Austria', 'Bélgica', 'Bulgaria', 'Francia', 'Irlanda', 'Italia', 'Países Bajos', 'Polonia', 'Rumanía', 'Reino Unido'],
                values: [2567, 185, 513, 248, 775, 256, 6693, 330, 592, 614, 2580]
            },
            'África': {
                countries: ['Camerún', 'Marruecos', 'Mauritania', 'Senegal'],
                values: [4, 967, 171, 138]
            },
            'América': {
                countries: ['Argentina', 'Brasil', 'Colombia', 'Cuba', 'Venezuela'],
                values: [713, 280, 2205, 3189, 7916]
            },
            'Asia': {
                countries: ['China', 'India'],
                values: [379, 186]
            }
        },
        '2018': {
            'Europa': {
                countries: ['Alemania', 'Austria', 'Bélgica', 'Bulgaria', 'Francia', 'Irlanda', 'Italia', 'Países Bajos', 'Polonia', 'Rumanía', 'Reino Unido'],
                values: [2607, 142, 469, 166, 782, 361, 6140, 367, 719, 707, 3070]
            },
            'África': {
                countries: ['Camerún', 'Marruecos', 'Mauritania', 'Senegal'],
                values: [2, 1322, 248, 216]
            },
            'América': {
                countries: ['Argentina', 'Brasil', 'Colombia', 'Cuba', 'Venezuela'],
                values: [833, 304, 3351, 4174, 10063]
            },
            'Asia': {
                countries: ['China', 'India'],
                values: [395, 257]
            }
        },
        '2019': {
            'Europa': {
                countries: ['Alemania', 'Austria', 'Bélgica', 'Bulgaria', 'Francia', 'Irlanda', 'Italia', 'Países Bajos', 'Polonia', 'Rumanía', 'Reino Unido'],
                values: [2461, 170, 458, 188, 830, 280, 5171, 367, 539, 540, 3200]
            },
            'África': {
                countries: ['Camerún', 'Marruecos', 'Mauritania', 'Senegal'],
                values: [11, 1717, 291, 207]
            },
            'América': {
                countries: ['Argentina', 'Brasil', 'Colombia', 'Cuba', 'Venezuela'],
                values: [1153, 279, 4133, 4369, 8623]
            },
            'Asia': {
                countries: ['China', 'India'],
                values: [342, 292]
            }
        },
        '2020': {
            'Europa': {
                countries: ['Alemania', 'Austria', 'Bélgica', 'Bulgaria', 'Francia', 'Irlanda', 'Italia', 'Países Bajos', 'Polonia', 'Rumanía', 'Reino Unido'],
                values: [1813, 116, 340, 91, 600, 236, 2690, 237, 412, 254, 3875]
            },
            'África': {
                countries: ['Camerún', 'Marruecos', 'Mauritania', 'Senegal'],
                values: [11, 902, 183, 170]
            },
            'América': {
                countries: ['Argentina', 'Brasil', 'Colombia', 'Cuba', 'Venezuela'],
                values: [541, 112, 2016, 1587, 2305]
            },
            'Asia': {
                countries: ['China', 'India'],
                values: [91, 122]
            }
        },
        '2021': {
            'Europa': {
                countries: ['Alemania', 'Austria', 'Bélgica', 'Bulgaria', 'Francia', 'Irlanda', 'Italia', 'Países Bajos', 'Polonia', 'Rumanía', 'Reino Unido'],
                values: [2877, 203, 465, 68, 865, 447, 3449, 294, 659, 312, 2302]
            },
            'África': {
                countries: ['Camerún', 'Marruecos', 'Mauritania', 'Senegal'],
                values: [8, 1407, 479, 473]
            },
            'América': {
                countries: ['Argentina', 'Brasil', 'Colombia', 'Cuba', 'Venezuela'],
                values: [801, 116, 1829, 3091, 2662]
            },
            'Asia': {
                countries: ['China', 'India'],
                values: [94, 90]
            }
        }
    };

    let currentChart = null;
    let currentView = 'Continentes';
    let selectedYear = 'total';

    // Function to get top N items
    function getTopN(data, n) {
        if (n === 'all' || n >= data.length) return data;
        
        const sortedIndices = data.values
            .map((value, index) => ({ value, index }))
            .sort((a, b) => b.value - a.value)
            .slice(0, n)
            .map(item => item.index);

        return {
            countries: sortedIndices.map(i => data.countries[i]),
            values: sortedIndices.map(i => data.values[i])
        };
    }

    // Function to combine all years data
    function getAllYearsData() {
        const combinedData = {};
        Object.values(yearlyData).forEach(yearData => {
            Object.entries(yearData).forEach(([continent, data]) => {
                if (!combinedData[continent]) {
                    combinedData[continent] = {
                        countries: data.countries,
                        values: new Array(data.values.length).fill(0)
                    };
                }
                data.values.forEach((value, index) => {
                    combinedData[continent].values[index] += value;
                });
            });
        });
        return combinedData;
    }

    // Function to create or update chart
    function updateChart(viewType, topN = 'all') {
        const chartContainer = document.querySelector('.chart-container');
        const tableContainer = document.querySelector('.table-container');
        
        if (viewType === 'Tabla') {
            chartContainer.style.display = 'none';
            tableContainer.style.display = 'block';
            updateTable();
            return;
        } else {
            chartContainer.style.display = 'block';
            tableContainer.style.display = 'none';
        }

        const ctx = document.getElementById('immigrationChart').getContext('2d');
        
        if (currentChart) {
            currentChart.destroy();
        }

        let chartData;
        if (viewType === 'Continentes') {
            const continentValues = ['Europa', 'África', 'América', 'Asia'].map(continent => {
                const data = selectedYear === 'total' ? 
                    countriesByContinent[continent] : 
                    yearlyData[selectedYear][continent];
                return data.values.reduce((a, b) => a + b, 0);
            });

            const total = continentValues.reduce((a, b) => a + b, 0);
            const percentages = continentValues.map(value => ((value / total) * 100).toFixed(1));

            const labels = ['Europa', 'África', 'América', 'Asia'].map((continent, i) => 
                `${continent} (${continentValues[i].toLocaleString()} - ${percentages[i]}%)`
            );
            
            chartData = {
                labels: labels,
                datasets: [{
                    data: continentValues,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                }]
            };

            currentChart = new Chart(ctx, {
                type: 'pie',
                data: chartData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: `Distribución por Continentes (Total: ${total.toLocaleString()})`,
                            font: { size: 18 }
                        }
                    }
                }
            });
        } else {
            const continentData = selectedYear === 'total' ? 
                countriesByContinent[viewType] : 
                yearlyData[selectedYear][viewType];
            const filteredData = getTopN(continentData, topN);
            const total = filteredData.values.reduce((a, b) => a + b, 0);
            const continentTotal = continentData.values.reduce((a, b) => a + b, 0);
            const percentages = filteredData.values.map(value => ((value / continentTotal) * 100).toFixed(1));
            const labels = filteredData.countries.map((country, i) => 
                `${country} (${filteredData.values[i].toLocaleString()} - ${percentages[i]}%)`
            );

            chartData = {
                labels: labels,
                datasets: [{
                    data: filteredData.values,
                    backgroundColor: filteredData.countries.map(() => 
                        '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
                    )
                }]
            };

            currentChart = new Chart(ctx, {
                type: 'pie',
                data: chartData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: [
                                `Distribución de Inmigrantes en ${viewType}`,
                                selectedYear === 'total' ? '(Hasta Ahora)' : `(${selectedYear})`,
                                `Total: ${continentTotal.toLocaleString()}`
                            ].join(' '),
                            font: { size: 18 }
                        }
                    }
                }
            });
        }
    }

    // Function to update table
    function updateTable() {
        const tbody = document.querySelector('#dataTable tbody');
        const searchTerm = document.getElementById('tableSearch').value.toLowerCase();
        const data = selectedYear === 'total' ? countriesByContinent : yearlyData[selectedYear];
        const total = Object.values(data).reduce((sum, continent) => 
            sum + continent.values.reduce((a, b) => a + b, 0), 0);
        
        tbody.innerHTML = '';
        
        Object.entries(data).forEach(([continent, data]) => {
            data.countries.forEach((country, index) => {
                if (country.toLowerCase().includes(searchTerm)) {
                    const row = document.createElement('tr');
                    const value = data.values[index];
                    const percentage = ((value / total) * 100).toFixed(1);
                    
                    row.innerHTML = `
                        <td>${continent}</td>
                        <td>${country}</td>
                        <td>${value.toLocaleString()}</td>
                        <td>${percentage}%</td>
                    `;
                    tbody.appendChild(row);
                }
            });
        });
    }

    // Initialize view buttons
    const viewButtons = document.querySelectorAll('.view-controls button');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            currentView = button.textContent;
            updateChart(currentView, document.getElementById('topFilter').value);
        });
    });

    // Add year selector
    const yearSelector = document.createElement('div');
    yearSelector.className = 'year-controls';
    yearSelector.innerHTML = `
        <label for="year-select">Año:</label>
        <select id="year-select">
            <option value="total">Hasta Ahora</option>
            ${Object.keys(yearlyData).reverse().map(year => 
                `<option value="${year}">${year}</option>`
            ).join('')}
        </select>
    `;
    document.querySelector('.controls').appendChild(yearSelector);

    // Year selection event listener
    document.getElementById('year-select').addEventListener('change', function(e) {
        selectedYear = e.target.value;
        updateChart(currentView, document.getElementById('topFilter').value);
        updateTable();
    });

    // Initialize filter
    const topFilter = document.getElementById('topFilter');
    topFilter.addEventListener('change', () => {
        if (currentView !== 'Tabla Completa') {
            updateChart(currentView, topFilter.value);
        }
    });

    // Initialize table search
    const tableSearch = document.getElementById('tableSearch');
    tableSearch.addEventListener('input', updateTable);

    // Initial chart
    document.getElementById('year-select').value = 'total';
    updateChart('Continentes');
    updateTable();
});
