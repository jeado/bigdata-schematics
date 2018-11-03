# Getting Started With Schematics

[FECONF 2018](https://2018.feconf.kr/)에서 발표한 "복붙없이 우리팀에 딱 맞는 엥귤러 프로젝트 만들기" 세션의 셈플 프로젝트입니다.

다음 schematic들을 제공합니다.

- model 클래스 생성 (model)
- @clr/angular 추가 (ng-add)
- Clarity datagird 추가 (datagrid)

프로젝트에 link 하신 후 빌드를 합니다.

```bash
npm build #bigdata-schematics 에서 실행
npm link <bigdata-schematics 경로> #적용하는 프로젝트에서 실행
```

그리고 프로젝트에서 다음 명령어로 확인해 볼 수 있습니다.

```bash
ng g bigdata-schematics:datagrid user --props=id:string,name:string,age:number
```

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```
 