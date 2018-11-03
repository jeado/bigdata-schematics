import { Component } from '@angular/core';
import { <%= classify(name) %> } from '../models/<%=name%>';

@Component({
  selector: '<%=prefix %>-<%= dasherize(name) %>-datagrid',
  templateUrl: './<%= dasherize(name) %>-datagrid.component.html'
})
export class <%= classify(name) %>DatagridComponent {
  <%= name %>s: <%= classify(name) %>;
}
