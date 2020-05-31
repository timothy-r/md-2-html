<!DOCTYPE html>
<html>
<head>
    <title>{{title}}</title>
    <link rel="stylesheet" href="{{styleSheet}}">
    {{#scripts}}<script>{{{scriptContents}}}</script>{{/scripts}}

</head>
<body>

{{{gaBody}}}

<ul>
    {{#links}}<li><a href="{{linkUrl}}">{{linkText}}</a></li>{{/links}}
</ul>

</body>
</html>
