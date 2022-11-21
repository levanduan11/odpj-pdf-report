var reportHTML = '';

var table_header = "<DIV class='report_header'><DIV>No</DIV><DIV>transaction_method</DIV><DIV>order_number</DIV><DIV>department_store</DIV><DIV>customer_code</DIV><DIV>customer_name</DIV><DIV>order_status</DIV><DIV>market</DIV><DIV>the_other_party</DIV><DIV>product_type</DIV><DIV>stock_code</DIV><DIV>trading_name</DIV><DIV>transaction_type</DIV><DIV>credit_classification</DIV><DIV>transaction_classification</DIV><DIV>buy_sell_division</DIV><DIV>account_classification</DIV><DIV>payment_method</DIV><DIV>order_type</DIV><DIV>price_specification</DIV><DIV>terms_conditions</DIV><DIV>transaction_price</DIV><DIV>enforcement_conditions</DIV><DIV>order_quantity</DIV><DIV>date_of_expiry</DIV><DIV>contract_price</DIV><DIV>contract_volume</DIV><DIV>contract_amount</DIV><DIV>contract_number</DIV><DIV>time</DIV><DIV>route</DIV><DIV>remarks</DIV></DIV>";

var lorem = [];
lorem.push('Sed ut perspiciatis ');
lorem.push('unde omnis iste ');
lorem.push('voluptatem doloremque ');
lorem.push('laudantium aperiam');
lorem.push('eaque ipsa ab ');
lorem.push('illo et quasi ');
lorem.push('architecto dicta ');
lorem.push('sunt explicabo perspiciatis');
lorem.push('Nemo enim ipsam voluptatem quia voluptas sit');
lorem.push('aspernatur odit aut fugit perspiciatis');

function fakeJsonData(data) {
    var fake_data = [];
    var fake_row_numer = 100;
    var dummy = {};

    // add 100 row
    for (var i = 0; i < fake_row_numer; i++) {
        dummy = {};
        dummy.no = i + 1;
        dummy.transaction_method = data.transaction_method; // data.transaction_method //'募集取引'
        dummy.order_number = Math.floor(Math.random() * 100000000); // data.order_number //'2212120000001'
        dummy.department_store = Math.floor(Math.random() * 1000); // data.department_store //'100'
        dummy.customer_code = data.customer_code //'デジタル太郎'
        dummy.customer_name = lorem[Math.floor(Math.random() * 10)];// data.customer_name //'受付済'
        dummy.order_status = data.order_status; //'--'
        dummy.market = data.market; //'--'
        dummy.the_other_party = data.the_other_party; //'デジタル債券'
        dummy.product_type = data.product_type; //'JP**********'
        dummy.stock_code = data.stock_code; //'********ファンド'
        dummy.trading_name = data.trading_name; //'現物取引'
        dummy.transaction_type = data.transaction_type; //'--'
        dummy.credit_classification = data.credit_classification; //'--'
        dummy.transaction_classification = data.transaction_classification; //'000'
        dummy.buy_sell_division = data.buy_sell_division; //'買'
        dummy.account_classification = data.account_classification; //'特定あり'
        dummy.payment_method = data.payment_method; //'--'
        dummy.order_type = data.order_type; //'--'
        dummy.price_specification = data.price_specification; //'--'
        dummy.terms_conditions = data.terms_conditions; //'--'
        dummy.transaction_price = data.transaction_price; //'*** *** ***'
        dummy.enforcement_conditions = data.enforcement_conditions; //'*** *** *** ***'
        dummy.order_quantity = data.order_quantity; //'--'
        dummy.date_of_expiry = data.date_of_expiry; //'--'
        dummy.contract_price = data.contract_price; //'--'
        dummy.contract_volume = data.contract_volume; //'--'
        dummy.contract_amount = data.contract_amount;//'--'
        dummy.contract_number = data.contract_number; //'--'
        dummy.time = data.time; //'YYYY/MM/DD hh:mm:ss'
        dummy.route = data.route; //'WEB'
        dummy.remarks = data.remarks; //'--
        fake_data.push(dummy);
    }

    return fake_data;
}

function genTable(data, table_id) {

    var table = "<DIV class='common_table' id="+ table_id +" >";
    var tr_content = "";

    for (var i =0; i < data.length; i ++) {
        tr_content += "<DIV>";
        for (var key in data[i]) {
            tr_content += "<DIV>" + data[i][key] + "</DIV>";
        }
        tr_content += "</DIV>";
    }
    table += table_header + tr_content + '</DIV>';
    return table;
}

function validateRowHeight(data_row) {
    var CHARS_PER_ROW_DEFAULT = 20;
    var over_row = 1;
    for (var key in data_row) {
        if (key == 'customer_name') {
            while (CHARS_PER_ROW_DEFAULT < data_row[key].length) {
                CHARS_PER_ROW_DEFAULT += CHARS_PER_ROW_DEFAULT;
                over_row ++;
            }
            
        }
    }

    // console.log('over_row', over_row)
    return over_row;
}

function validateRowHeightInTableData(data_table) {
    var over_row = 0;
    var over_row_in_table = 0;
    for ( var i = 0; i < data_table.length; i++) {
        over_row = validateRowHeight(data_table[i]);
        if (over_row > 1) {
            over_row_in_table = over_row_in_table + over_row - 1;
        }
    }
    // console.log('over_row_in_table', over_row_in_table);
    return over_row_in_table;
}

var ROW_PER_PAGE = 15;
function sliceData(data) {
    var slice_data = [];
    var rowCount = 0;
    var temp_data = [];
    var over_row = 0;
    var test = [];
    while (rowCount < data.length) {
        over_row = validateRowHeightInTableData(temp_data);
        test.push([over_row,rowCount + ROW_PER_PAGE - over_row]);
        temp_data = data.slice(rowCount, rowCount + ROW_PER_PAGE - over_row);
        slice_data.push(temp_data);
        rowCount = rowCount + ROW_PER_PAGE - over_row;
    }
    console.log('test', test)
    console.log('slice_data', slice_data)
    return slice_data;
}


var TABLES = [];
var TABLE_HEIGHTS = [];
function getTableFromJson() {
    reportHTML = "<DIV id='report'>";

    var fake_json_data = fakeJsonData(json_data);
    html_data = sliceData(fake_json_data);

    var space = '<div class="space"> </div>';
    var break_page = '<div class="pagebreak"> </div> <div class="clear"> </div> <div class="page-break"> </div>';
    
    for ( var i = 0; i < html_data.length; i++) {
        if (TABLE_HEIGHTS[i]) {
            reportHTML += "<h1> height: " + TABLE_HEIGHTS[i] + "px</h1>";
        }
        reportHTML += genTable(html_data[i], "table_" + i);
        reportHTML += space;
        reportHTML += break_page;
        TABLES.push("table_" + i);
    }

    reportHTML +="</DIV>";
}

function getAllTableHeight() {
    console.log('TABLES', TABLES);
    if (TABLES.length > 0) {
        for ( var i = 0; i < TABLES.length; i++) {
            TABLE_HEIGHTS.push(getTableHeight(TABLES[i]));
        }
    }
    console.log('TABLE_HEIGHTS', TABLE_HEIGHTS);
}

function getTableHeight(table_id) {
    var clientHeight = document.getElementById(table_id).clientHeight;
    return clientHeight;
    
}

function removeFirstReport() {
    const element = document.getElementById('report');
    element.remove();
}