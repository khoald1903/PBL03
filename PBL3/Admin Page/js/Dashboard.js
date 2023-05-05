
// Line chart

const labels_line = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4' , 'Tháng 5', 'Tháng 6' , 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
const data_line = {
    labels: labels_line,
    datasets : [
        {
            label: '2022',
            backgroundColor: "blue",
            borderColor: 'blue',
            data: [0,27,56,34,24,50,32,67,21,25,98,56],
            tension: 0.4,
        },
         {
            label: '2023',
            backgroundColor: "red",
            borderColor: 'red',
            data: [0,13,40,59,44,55,46,34,56,13,77,44],
            tension: 0.4,
        },
    ],
}
const config_line = {
    type: 'line',
    data: data_line,
}
const canvas_line = document.getElementById('canvas_line')   
const chart_line = new Chart(canvas_line, config_line);

// Doughnut chart
const data_doughnut = {
  labels: [
    'Gucci',
    'Adidas',
    'Puma',
    'Nike',
    'Vans',
    'Oxford',
    'LOAFERS',
    'Louis Vuitton',
    'Converse',
    'Giorgio Armani'
  ],
  datasets: [{

    data: [300, 50, 100,50,38,42,36,92,150,240],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      '#467cb6',
      '#ffe8b3',
      '#31ad50',
      '#b939bb',
      '#c04040',
      '#8899ba',
      '#89664b'
    ],
    hoverOffset: 4
  }]
};
const config_doughnut = {
    type: 'doughnut',
    data: data_doughnut,
}

const canvas_doughnut = document.getElementById('canvas_doughnut') ;  
const chart_doughnut = new Chart(canvas_doughnut, config_doughnut);

// Bar chart
// bar chart data
	const data_bar = {
	labels : ["LF01","LFF06","MFFGHGGH","MN061"],
	 datasets: [{
    data: [45, 50, 34,66,38],
    label: 'Số lượng',
    backgroundColor: [
      '#31ad50',    
    ],
  }]
	};

	// get bar chart canvas

const config_bar = {
    type: 'bar',
    data: data_bar,
}

const canvas_bar = document.getElementById('canvas_bar') ;  
const chart_bar = new Chart(canvas_bar, config_bar);

