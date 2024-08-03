//切换时更新属性是否禁用
import { getSelectValues } from "./getSelectValues";

export function updateOptional(specs: any, pathMap: any) {
  const selectedValues = getSelectValues(specs);
  specs.forEach((spec: any, index: any) => {
    const selectedValTem = JSON.parse(JSON.stringify(selectedValues));
    spec.values.forEach((val: any) => {
      selectedValTem[index] = val.name;
      const key = selectedValTem.filter((value: any) => value).join("-");
      if (pathMap[key]) val.optional = true;
      else val.optional = false;
    });
  });
}
