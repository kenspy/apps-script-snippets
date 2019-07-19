# Google Apps Script Snippets

## Introduction
Useful Google Apps Script snippets to easily integrate in your Apps Script project. This library is design to be simple and easy to understand for beginners, by reducing the amount of codes it would take to get a tasks done and implement the most used function in one line of code.

## Advanced Google Services
It is important to enabled the `Drive API` from both Apps Script and the [Google Cloud Platform API Dashboard](https://console.cloud.google.com/apis/api/drive.googleapis.com/overview).

## Library ID
You can test the library using the project ID.
`1cyf4-wSESVKfkNR2xfDynYgE2nJ3P4M5SVoMqRd3EyQUajUCQLiU1-Z8` and `SnippetApp` as the identifier.
#### Usability
`SnippetApp.firstName()`<br/>
`SnippetApp.lastName()`<br/>
`SnippetApp.profileImage('1abcdefghijklmnopqrstuv')`

## User Information
#### firstName()
Displays the user's first name.
```
function firstName() {
  ...
}
```

#### lastName()
Displays the user's last name.
```
function lastName() {
  ...
}
```

#### fullName()
Displays the user's full name.
```
function fullName() {
  ...
}
```

#### email()
Displays the user's email.
```
function email() {
  ...
}
```

#### profileImage(document_id)
Displays the user's profile image using the document ID.
```
function profileImage() {
  ...
}
```


#### domainName(document_id)
Displays the user's domain name using the document ID.
```
function domainName() {
  ...
}
```

## Sheet to JSON
#### getJson()

## Date and Time Format
#### newDate()

#### calculateYears()

#### calculateMonths()

#### calculateDays()

#### calculateHours()

## Parameters
#### date_time_formate
#### document_id
#### from_date and to_date
#### headding_row_number
#### sheet_name
#### spreadsheet_id
