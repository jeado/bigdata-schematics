import { Rule, SchematicContext, Tree, chain, apply, url, template, mergeWith, move, schematic } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { DatagridOption } from './schema';
import { classify, dasherize } from '../../node_modules/@angular-devkit/core/src/utils/strings';

const stringUtils = { classify, dasherize };

export default function (_options: DatagridOption): Rule {
  // const { name } = _options;
  return chain([
    schematic('model', _options),
    // externalSchematic('@schematics/angular', 'component', {
    //   name: name + '-datagrid'
    // }),
    (_tree: Tree, context: SchematicContext) => {
      context.logger.log('info', `Create Datagird`);
      // _tree.delete(`/src/app/${name}-datagrid/${name}-datagrid.component.html`);
      // _tree.delete(`/src/app/${name}-datagrid/${name}-datagrid.component.ts`);
      const props = _options.props.split(",").map(v => v.split(":"));
      const workspace = getWorkspace(_tree);
      const project = workspace.projects[Object.keys(workspace.projects)[0]];

      const templateSource = apply(url('./files'), [
        template({ ..._options, ...stringUtils, ...project, props }),
        move('src/app')
      ])
      return mergeWith(templateSource);
    }
  ]);
}