(function(){
    var body = document.getElementsByTagName("body")[0];
    var datePicker = document.createElement("div");
    datePicker.id="datepicker"
    body.appendChild(datePicker);
    var datepicker = document.getElementById("datepicker");
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    var dpMethods = {
        init: function(){
            
            currentDate = new Date()
            var table = document.createElement("table");
            this.buildCalendar(table,new Date());
        },

        addEventListners: function(table){
            prevMonth = document.querySelector(".prevMonth");
            prevMonth.addEventListener("click", function(e){
                dpMethods.buildCalendar(table, new Date(this.getAttribute("data-year"),this.getAttribute("data-month")))
            })
            nextMonth = document.querySelector(".nextMonth");
            nextMonth.addEventListener("click", function(e){
                dpMethods.buildCalendar(table, new Date(this.getAttribute("data-year"),this.getAttribute("data-month")))
            })
        },

        getCurrentMonth: function(date){
            return months[date.getMonth()];
        },

        getStartDay:function(date){
            date.setDate(1);
            return date.getDay();
        },

        buildMonthSelector:function(date){
            var monthSelector = document.createElement("tr");
            var prevMonth = document.createElement("td");
            prevMonth.setAttribute("class","prevMonth");
            prevMonthDate = new Date(date);
            prevMonthDate.setMonth(date.getMonth() - 1)
            prevMonth.setAttribute("data-month", prevMonthDate.getMonth());
            prevMonth.setAttribute("data-year", prevMonthDate.getFullYear());
            prevMonth.setAttribute("class","prevMonth");
            prevMonth.appendChild(document.createTextNode("«"));
            
            var currentMonth = document.createElement("td");
            currentMonth.setAttribute("class","currentMonth");
            currentMonth.setAttribute("colspan","5");
            currentMonth.style.textAlign = "center";
            currentMonth.appendChild(document.createTextNode(this.getCurrentMonth(date)));

            var nextMonth = document.createElement("td");
            nextMonthDate = new Date(date);
            nextMonthDate.setMonth(date.getMonth() + 1)
            nextMonth.setAttribute("data-month", nextMonthDate.getMonth());
            nextMonth.setAttribute("data-year", nextMonthDate.getFullYear());
            nextMonth.setAttribute("class","nextMonth");
            nextMonth.appendChild(document.createTextNode("»"));
            
            monthSelector.appendChild(prevMonth);
            monthSelector.appendChild(currentMonth);
            monthSelector.appendChild(nextMonth);
            return monthSelector;
        },

        assignDays:function(){
            var th = document.createElement("tr");
            th.setAttribute("class","day");
            for(let i =0; i<7; i++){
                tdDay = document.createElement("td")
                tdDay.setAttribute("class", days[i])
                tdDay.appendChild(document.createTextNode(days[i].slice(0,2)));
                th.appendChild(tdDay);
            }
            return th;
        },

        getStartDate:function(thisStartDate){
            let startDay = this.getStartDay(thisStartDate);
            thisStartDate.setDate(thisStartDate.getDate()-startDay);
        },

        assignDates:function(tbody, date){
            let year = date.getFullYear();
            let month = date.getMonth();
            let thisStartDate = new Date(year,month);
            this.getStartDate(thisStartDate);

            for(let i=0; i<6; i++){
                var tr = document.createElement("tr");
                for(let i =0; i<7; i++){
                    var tdDate = document.createElement("td");
                    tdDate.setAttribute("class", "date");
                    var span = document.createElement("span");
                    span.appendChild(document.createTextNode(thisStartDate.getDate()));
                    tdDate.appendChild(span);
                    tr.appendChild(tdDate);
                    thisStartDate.setDate(thisStartDate.getDate()+1)
                }
                tbody.appendChild(tr);
            }
        },

        buildCalendar: function(table, date){
            table.innerText = "";
            var tbody = document.createElement("tbody");
            tbody.appendChild(this.buildMonthSelector(date));
            tbody.appendChild(this.assignDays());
            this.assignDates(tbody, date);
            datepicker.appendChild(table);
            table.appendChild(tbody);
            this.addEventListners(table)
        }
    }

    dpMethods.init();
    
})()