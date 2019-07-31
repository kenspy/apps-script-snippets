# Google Apps Script Snippets

## Introduction
Useful Google Apps Script snippets to easily integrate in your Apps Script project. This library is design to be simple and easy to understand for beginners, by reducing the amount of codes it would take to get a tasks done and implement the most used function in one line of code.

## Advanced Google Services
It is important to enabled the `Drive API` from both Apps Script and the [Google Cloud Platform API Dashboard](https://console.cloud.google.com/apis/api/drive.googleapis.com/overview).

## Library ID
You can test the library using the project ID.
`1cyf4-wSESVKfkNR2xfDynYgE2nJ3P4M5SVoMqRd3EyQUajUCQLiU1-Z8` and `SnippetApp` as the identifier.
#### Usability
`SnippetApp.user().firstName()`<br/>
`SnippetApp.sheet().getJSON('1abcdefghijklmnopqrstuv', 'Sheet1')`<br/>
`SnippetApp.calculate().months('04/15/2015', '07/25/2018)`

## user()
#### firstName()
Displays the user's first name.
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
SnippetApp.user().email()
```

#### profileImage(document_id)
Displays the user's profile image using the document ID.
```
SnippetApp.user().profileImage('1abcdefghijklmnopqrstuvwxyz');
```


#### domainName(document_id)
Displays the user's domain name using the document ID.
```
SnippetApp.user().domainName('1abcdefghijklmnopqrstuvwxyz')
```

## sheet()
#### getJSON(spreadsheet_id, sheet_name, heading_row_number)
#### getPDF(spreadsheet_id, sheet_name, from_range, to_range)
#### orderSheetByName(spreadsheet_id)

## Date()
#### newDate(date_time_format)
#### newTime(time_format)

## calculate()
#### calculateYears(from_date, to_date)

#### calculateMonths(from_date, to_date)

#### calculateDays(from_date, to_date)

#### calculateHours(from_date, to_date)

## Parameters
#### date_time_format
#### document_id
#### from_date 
#### to_date
#### headding_row_number
#### sheet_name
#### spreadsheet_id
