module.exports = function (api) {
    api.cache(true)

    const presets = ['next/babel', '@babel/preset-react'];
    const plugins = ['macros'];

    return {
        presets,
        plugins
    }
}