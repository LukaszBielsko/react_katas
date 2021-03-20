import TimeGreeting from '../TimeGreeting'
import { render } from '@testing-library/react'


describe('<TimeGreeting/>', () => {
  it('displays morning greeting if hour is before 12', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(22);

    const { getByText } = render(<TimeGreeting />)
    getByText('good not so morning any more')
  })

  it('displays morning greeting before 12', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(11);

    const { getByText } = render(<TimeGreeting />)
    getByText('good morning')
  })
})

afterEach(() => {
  jest.clearAllMocks()
});
