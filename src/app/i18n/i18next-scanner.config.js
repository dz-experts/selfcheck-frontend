module.exports = {
    options: {
        debug: true,
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx']
        },
        trans: {
            extensions: ['.js', '.jsx'],
            fallbackKey: (ns, value) => {
                return value;
            }
        },
        lngs: ['ar', 'en'], // %Add any new languages here%
        ns: [
          'resource'
        ],
        defaultNs: 'resource',
        defaultValue: null,
        resource: {
            // the source path is relative to current working directory
            loadPath: 'src/app/i18n/{{lng}}/{{ns}}.json',
            // the destination path is relative to the --output config path
            savePath: 'src/app/i18n/{{lng}}/{{ns}}.json'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    }
};
