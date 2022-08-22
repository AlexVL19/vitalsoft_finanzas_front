export const graficaMovimientos = {
        //Datos necesarios para la gráfica, incluida la leyenda y el set de datos necesarios para mostrarlos
        data: {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],

          datasets: [
            {
              label: "Rutinarios",
              data: [3, 5, 6, 1, 9, 3, 5, 3, 2, 7, 1, 3],
              backgroundColor: "rgba(252, 70, 70, .5)",
              borderColor: "#fc4646",
              borderWidth: 3
            },
            {
              label: "Fortuitos",
              data: [2, 1, 4, 6, 7, 6, 4, 5, 6, 2, 4, 5],
              backgroundColor: "rgba(122, 171, 255, .5)",
              borderColor: "#7aabff",
              borderWidth: 3
            }
          ]
        },

        //Objeto de opciones en donde hay ajustes misceláneos como el estilo de las líneas o el gráfico en sí
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }

      export default graficaMovimientos;