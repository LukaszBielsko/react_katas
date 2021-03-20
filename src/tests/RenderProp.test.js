import RenderProp from '../RenderProp'
import Amount from '../RenderProp'
import { render, fireEvent, screen } from '@testing-library/react'

describe('<RenderProp/>', () => {
  it('renders properly', () => {
    const { getByTestId } = render(<RenderProp />)

    expect(getByTestId('converter'))
  })

  it('renders default amount properly', () => {
    const { getByTestId } = render(<RenderProp />)

    expect(getByTestId('pln')).toHaveTextContent('Amount in PLN: 0')
    expect(getByTestId('euro')).toHaveTextContent('Euro: 0')
    expect(getByTestId('pound')).toHaveTextContent('Pound: 0')
  })

  it('render proper amount when incrementing ', () => {
    const { getByTestId } = render(<Amount />)
    fireEvent.click(screen.getByText('+'))
    expect(getByTestId('pln')).toHaveTextContent('Amount in PLN: 1')
    expect(getByTestId('euro')).toHaveTextContent('Euro: 0.22')
    expect(getByTestId('pound')).toHaveTextContent('Pound: 0.19')
  })

  it('render proper amount when decrementing ', () => {
    const { getByTestId } = render(<Amount />)
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('-'))

    expect(getByTestId('pln')).toHaveTextContent('Amount in PLN: 1')
    expect(getByTestId('euro')).toHaveTextContent('Euro: 0.22')
    expect(getByTestId('pound')).toHaveTextContent('Pound: 0.19')

  })

})
