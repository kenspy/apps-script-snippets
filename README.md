# Google Apps Script Snippets

## Introduction
Useful Google Apps Script snippets to easily integrate in your Apps Script project.

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

## Parameters
#### document_id
