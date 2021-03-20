const promise = (argument) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (argument === 'nope' || typeof argument === 'number') {
        reject('not allowed argument passed')
      }

      if (!argument) {
        resolve('default result')
      }

      resolve(argument)
    }, 300)
  })
}

describe('promise testing', () => {
  describe('resolved', () => {
    it('should resolve promise with passed argument', async () => {
      await expect(promise('test')).resolves.toBe('test')
    })

    it('should resolve promise with default result', async () => {
      await expect(promise()).resolves.toBe('default result')
    })
  })

  describe('rejected', () => {
    it('should reject promise when number is passed ', async () => {
      await expect(promise(666)).rejects.toBe('not allowed argument passed')
    })

    it('shuld reject when nope is passed', async () => {
      await expect(promise('nope')).rejects.toBe('not allowed argument passed')
    })
  })
})
