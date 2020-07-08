# Google Apps Script Snippets

## Introduction
Useful Google Apps Script snippets to easily integrate in your Apps Script project. This library is design to be simple and easy to understand for beginners, by reducing the amount of codes it would take to get a tasks done and implement the most used function in one line of code.

## **Advanced Google Services**
It is important to enabled the `Drive API` from both Apps Script and the [Google Cloud Platform API Dashboard](https://console.cloud.google.com/apis/api/drive.googleapis.com/overview).

## **Library ID**
You can use the library using the project ID.
`1cyf4-wSESVKfkNR2xfDynYgE2nJ3P4M5SVoMqRd3EyQUajUCQLiU1-Z8` and `SnippetApp` as the identifier.
#### Usability
`SnippetApp.user().firstName()`<br/>
`SnippetApp.sheet().getJSON('1abcdefghijklmnopqrstuv', 'Sheet1')`<br/>
`SnippetApp.calculate().months('04/15/2015', '07/25/2018');`

## **user()**
#### firstName()
Displays the user's first name.
```
var user =  SnippetApp.user();
var firstName = user.firstName();
```
Or
```
SnippetApp.user().firstName();
```

#### lastName()
Displays the user's last name.
```
SnippetApp.user().lastName();
```

#### fullName()
Displays the user's full name.
```
SnippetApp.user().fullName();
```

#### email()
Displays the user's email.
```
SnippetApp.user().email();
```

#### profileImage(document_id)
Displays the user's profile image using the document ID.
```
SnippetApp.user().profileImage('1abcdefghijklmnopqrstuvwxyz');
```


#### domainName(document_id)
Displays the user's domain name using the document ID.
```
SnippetApp.user().domainName('1abcdefghijklmnopqrstuvwxyz');
```

## **sheet()**
#### getJSON(spreadsheet_id, sheet_name, heading_row_number)
Displays the sheet data in JSON format.
```
SnippetApp.sheet().getJSON('1abcdefghijklmnopqrstuvwxyz', 'sheet1', '2');
```

#### getPDF(spreadsheet_id, sheet_name, from_range, to_range)
Generate a PDF file from the sheet.
```
SnippetApp.sheet().getPDF('1abcdefghijklmnopqrstuvwxyz', 'A', 'E');
```

#### orderSheetByName(spreadsheet_id)
Re-arrange sheets in alphabetical order.
```
SnippetApp.sheet().oderSheetByName('1abcdefghijklmnopqrstuvwxyz');
```

## **Date()**
#### newDate(date_time_format)
Displays today's date in different format.
```
SnippetApp.date().newDate('MM/dd/yyyy');
```

#### newTime(time_format)
Displays today's time.
```
SnippetApp.date().newTime('HH:mm:ss');
```

#### format(date_time, date_time_format)
Format dates or time
```
SnippetApp.date().format('01/01/2020', 'MM/dd/yyyy');
```

## **calculate()**
#### calculateYears(from_date, to_date)
Calculate number of years between to dates.
```
SnippetApp.calculate().calculateYears('01/01/1980', '01/01/2020');
```

#### calculateMonths(from_date, to_date)
Calculate number of months between two dates.
```
SnippetApp.calculate().calculateMonths('01/01/1980', '01/01/2020');
```

#### calculateDays(from_date, to_date)
Calculate number of days between two dates.
```
SnippetApp.calculate().calculateDays('01/01/1980', '01/01/2020');
```

#### calculateHours(from_date, to_date)
Calculate number of hours between two dates.
```
SnippetApp.calculate().calculateHours('01/01/1980', '01/01/2020');
```

## **Parameters**
#### date_time_format
`MM/dd/yy`            example: 01/01/20
`MM/dd/yyyy`          example: 01/01/2020
`MM/dd/yyyy HH:mm:ss` example: 01/01/2020 23:59:59

#### time_format
`HH:mm`       example: 23:59
`HH:mm:ss`    example: 23:59:59
`hh:mm`       example: 11:59
`hh:mm:ss a`  example: 11:59:59 PM

#### document_id
`1abcdefghijklmnopqrstuvwxyz`

#### from_date
`01/01/2020`

#### to_date
`01/01/2020`

#### heading_row_number
#### sheet_name
#### spreadsheet_id
`1abcdefghijklmnopqrstuvwxyz`
