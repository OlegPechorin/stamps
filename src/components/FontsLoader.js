import FontFaceObserver from 'FontFaceObserver'

const MuseoSansCyrl100 = new FontFaceObserver('MuseoSansCyrl', {
  weight: 100
})

const MuseoSansCyrl300 = new FontFaceObserver('MuseoSansCyrl', {
  weight: 300
})

const MuseoSansCyrl500 = new FontFaceObserver('MuseoSansCyrl', {
  weight: 500
})

const MuseoSansCyrl700 = new FontFaceObserver('MuseoSansCyrl', {
  weight: 700
})

const MuseoSansCyrl900 = new FontFaceObserver('MuseoSansCyrl', {
  weight: 900
})

async function fontsWaiting() {
  let count = 0

  await MuseoSansCyrl100.load().then(function () {
    console.log('MuseoSansCyrl-100 has loaded.')
    ++count
  }).catch(function () {
    console.log('MuseoSansCyrl-100 failed to load.')
  })

  await MuseoSansCyrl300.load().then(function () {
    console.log('MuseoSansCyrl-300 has loaded.')
    ++count
  }).catch(function () {
    console.log('MuseoSansCyrl-300 failed to load.')
  })

  await MuseoSansCyrl500.load().then(function () {
    console.log('MuseoSansCyrl-500 has loaded.')
    ++count
  }).catch(function () {
    console.log('MuseoSansCyrl-500 failed to load.')
  })

  await MuseoSansCyrl900.load().then(function () {
    console.log('MuseoSansCyrl-700 has loaded.')
    ++count
  }).catch(function () {
    console.log('MuseoSansCyrl-700 failed to load.')
  })

  await MuseoSansCyrl900.load().then(function () {
    console.log('MuseoSansCyrl-900 has loaded.')
    ++count
  }).catch(function () {
    console.log('MuseoSansCyrl-900 failed to load.')
  })

  if (count == 5) {
    document.documentElement.className += " MuseoSansCyrl-loaded"
    console.log('MuseoSansCyrl has loaded.')
  } else {
    console.log('MuseoSansCyrl failed to load.')
  }
}

fontsWaiting()

