import { Rule, SchematicContext, Tree, chain, apply, url, template, move, mergeWith, MergeStrategy} from '@angular-devkit/schematics';
// import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import { ModelOption } from './schema';
import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function bigdataSchematics(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create(_options.path + "/hi.txt", "hello Schematics!");
    return tree;
  };
}

const stringUtils = { classify, dasherize };

export function model(options: ModelOption): Rule {
  const props = (options.props) ?
    options.props.split(",").map(v => v.split(":")) : [];
  const name = options.name;
  const templateSource = apply(url('./files'), [
    template({ props, name, ...stringUtils }),
    move(`src/app/models/`)
  ])

  return chain([
    mergeWith(templateSource, MergeStrategy.Default)
  ]);
}

// export function model(options: ModelOption): Rule {
//   const props = (options.props) ?
//     options.props.split(",").map(v => v.split(":")) : [];
//   const name = options.name;
//   return chain([
//     externalSchematic('@schematics/angular', 'class', options),
//     (tree: Tree, _context: SchematicContext) => {
//       _context.logger.info(`Create Model name: ${name}, props: ${props}`);
//       const content = tree.read(`/src/app/${name}.ts`);
//       if (content) {
//         const propsStr =
//           props.map(v => `  ${v[0]}: ${v[1]};`).reduce((b, a) => b + '\n' + a, '');
//         const newStr = content.toString().replace("\n", propsStr + "\n");
//         tree.overwrite(`/src/app/${name}.ts`, newStr);
//       }
//       return tree;
//     }
//   ]);
// }
