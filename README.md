# meng-lc-h5

h5 版本 低代码平台

## ⌨️ 本地开发

### npm version <newversion> 用命令升级版本号

|        命令     |      作用      |     说明     |
| --------------- | ------------- | ------------ | 
| npm version prerelease | 1.0.0 变为 1.0.1-0 | 当执行 prerelease 时，如果没有预发布号，则增加 minor，同时 prerelease 设为 0；如果有 prerelease， 则 prerelease 增加 1| 
| npm version prepatch   | 1.0.1-1 变为 1.0.2-0 | prepatch 直接升级小号，增加预发布号为 0|
| npm version preminor   | 1.0.2-0 变为 1.1.0-0 | preminor - 直接升级中号，小号置为 0，增加预发布号为 0|
| npm version premajor   | 1.1.0-0 变为 2.0.0-0 |  - |
| npm version patch      | 2.0.0-0 变为 2.0.0   | patch：如果有 prerelease ，则去掉 prerelease ，其他保持不变；如果没有 prerelease ，则升级 minor |
| npm version minor      | 2.0.1 变为 2.1.0     | 如果有 prerelease， 首先需要去掉 prerelease；如果 patch 为 0，则不升级 minor，如果 patch 不为 0， 则升级 minor，同时 patch 设为 0  |
| npm version major      | 3.1.0 -->4.0.0       | 如果有预发布号：且 minor 和 patch 有任意一个不是 0，则升级一位 major，其他位都置为 0，并去掉 prerelease |




## scripts 说明

cz: cz-git 提交规范，把 git commit  替换成 pnpm run cz即可

