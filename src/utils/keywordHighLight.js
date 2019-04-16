/**
 * @Description: 
 * @params: 
 * @return: 
 * @LastEditors: 蔡江旭
 * @LastEditTime: Do not edit
 * @Date: 2019-04-15 15:38:17
 */
export default function keywordHighLight (originText = '', keyword, highLightTemplate = '') {
    const keywordRegExp = new RegExp(keyword, 'g');
    return originText.replace(keywordRegExp, function (match) {
        const tempRegExp = /{{{text}}}/g;
        const hasTempStr = tempRegExp.test(highLightTemplate);
        return hasTempStr ? highLightTemplate.replace(tempRegExp, match) : match;
    })
}