export const errorMessage = function(key, t = x => x) {
    switch (key) {
        case 'required':
            return () => t('Ce champ est réquis')
        case 'min':
            return (min) => `${t('Valeur minimale :')} ${min}`
        case 'max':
            return (max) => `${t('Valeur maximale :')} ${max}`
        case 'minLength':
            return (minLength) => `${t('La valeur doit comprendre au moins')} ${minLength} ${t('caractères')}`
        case 'maxLength':
            return (maxLength) => `${t('La valeur doit comprendre au plus')} ${maxLength} ${t('caractères')}`
        default:
            return t('Valeur non valide')
    }
}