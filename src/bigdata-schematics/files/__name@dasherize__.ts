export class <%= classify(name) %> {
<% props.forEach(function (prop) { %>
    <%= prop[0] %>: <%= prop[1] %>;
    <% });%>
}