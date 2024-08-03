//初始化商品可选属性
export function initOptional(goodMap: any, specs: any) {
  specs.forEach((spec: any) => {
    spec.values.forEach((val: any) => {
      if (goodMap[val.name]) val.optional = true;
      else val.optional = false;
    });
  });
}
