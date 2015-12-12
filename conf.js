exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        chat: 'client/components/chat/chat.spec.js',
    }
}