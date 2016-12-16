/**
 * Created by workexp on 16/12/2016.
 */
$(document).ready(function () {
    $("#start").click(increment);
    $("#pause").click(stop);
    $("#reset").click(startAgain);
    $("#lap").click(function () {
        count++;
        var x = document.getElementById("display").innerHTML;
        var row = tab.insertRow(-1);
        att = row.insertCell(0);
        var time = row.insertCell(1);
        att.innerHTML = count;
        time.innerHTML = x;
        $.ajax({type: "POST", url:"Time.php", data: x})

    })
    $("#clear").click(clearTable);

});