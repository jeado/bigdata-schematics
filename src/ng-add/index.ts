import { Rule, SchematicContext, Tree, chain, externalSchematic, url, template, move, mergeWith, apply } from '@angular-devkit/schematics';
import { AddSchema } from './schema';

export default function (_options: AddSchema): Rule {
  return chain([
    externalSchematic('@clr/angular', 'ng-add', _options),
    (_host: Tree, context: SchematicContext) => {
      context.logger.log(
        'info',
        `✅️ Added "@clr/angular" into dependencies`
      );
      if (_options.applyContainer) {
        _host.delete('src/app/app.component.html');
        const templateSource = apply(url('./files'), [
          template({}),
          move('src/app')
        ]);
        return mergeWith(templateSource);
      }
    }
  ]);
}