import React, { useEffect, useState } from 'react'
import { SelectPicker } from 'rsuite'
import { getCookie, hasCookie, setCookie } from 'cookies-next'
import { Box } from '@mui/material'

const languages = [
    { label: 'English', value: '/auto/en' },
    { label: 'Hindi', value: '/auto/hi' },
    { label: 'Chinese', value: '/auto/zh-CN' },
]

const googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
        {
            pageLanguage: 'auto',
            autoDisplay: false,
            includedLanguages: 'en,hi,zh-CN',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
    )
}

export default function GoogleTranslate() {
    const [selected, setSelected] = useState<string | undefined>(() => {
        const cookieValue = getCookie('googtrans')
        return cookieValue || '/auto/en'
    })

    useEffect(() => {
        const addScript = document.createElement('script')
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
        document.body.appendChild(addScript)
        ;(window as any).googleTranslateElementInit = googleTranslateElementInit
    }, [])

    const langChange = (value: string) => {
        const decodedValue = decodeURI(value)
        setCookie('googtrans', decodedValue)
        setSelected(decodedValue)
        window.location.reload()
    }

    return (
        <Box sx={{ position: 'relative', width: '100px', overflow: 'hidden', display: 'flex', justifyContent: 'end' }}>
            <div id='google_translate_element' style={{ zIndex: 1, position: 'absolute', left: '0%', top: '1rem' }} />

            <SelectPicker
                data={languages}
                style={{ width: '100px', visibility: 'hidden' }}
                placement='bottomEnd'
                cleanable={false}
                value={selected}
                searchable={false}
                className={'notranslate'}
                menuClassName={'notranslate'}
                onSelect={(event) => langChange(event.target.value)}
                placeholder='Languages'
            />
        </Box>
    )
}
