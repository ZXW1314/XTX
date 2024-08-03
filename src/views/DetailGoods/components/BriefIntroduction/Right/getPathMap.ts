//获取商品中的可选属性
export function getPathMap(skus: any) {
  const pathMap: any = {};
  const effectiveSkus = skus.filter((item: any) => item.inventory > 0);
  effectiveSkus.forEach((item: any) => {
    const selectedVarArr = item.specs.map((val: any) => val.valueName);
    const numSkus = [];
    for (let i = 0; i < 1 << selectedVarArr.length; i++) {
      const numSku = [];
      for (let j = 0; j < selectedVarArr.length; j++) {
        if (i & (1 << j)) {
          numSku.push(selectedVarArr[j]);
        }
      }
      numSkus.push(numSku);
    }
    numSkus.forEach((val) => {
      const key = val.join("-");
      if (pathMap[key]) {
        pathMap[key].push(item.id);
      } else {
        pathMap[key] = [item.id];
      }
    });
  });
  return pathMap;
}
