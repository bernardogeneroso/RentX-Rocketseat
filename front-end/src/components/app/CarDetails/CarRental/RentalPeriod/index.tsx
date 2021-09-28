import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { FaChevronRight } from 'react-icons/fa'
import { CenterModal, ModalCloseTarget } from 'react-spring-modal'

import { Button } from '../../../../Button'

import { Container, Header, Content, ContentTotal } from './styles'

import Calendar from '../../../../../pages/assets/calendar.svg'
import { priceFormatter } from '../../../../../utils/priceFormatter'

interface RentalPeriodProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styles: any
}

export default function RentalPeriod({ styles }: RentalPeriodProps) {
  const theme = useTheme()
  const [modal, setModal] = useState(false)

  function handleToggleModal() {
    setModal((state) => !state)
  }

  return (
    <Container
      style={{
        position: 'absolute',
        ...styles,
      }}
    >
      <Content>
        <Header>
          <div className="content">
            <div className="each">
              <div className="between">To</div>
              <div className="time">20 July 2020</div>
            </div>

            <FaChevronRight size={12} />

            <div className="each">
              <div className="between">Until</div>
              <div className="time">20 July 2020</div>
            </div>
          </div>

          <button>
            <Calendar onClick={handleToggleModal} />
          </button>
        </Header>

        <ContentTotal>
          <div className="each">
            <div className="total">Total</div>
            <div className="rental-counts">{`${priceFormatter(
              580
            )} x 3 per day`}</div>
          </div>

          <div className="rentalTotal">{priceFormatter(2900)}</div>
        </ContentTotal>
      </Content>

      <Button text="Rental now" backgroundColor={theme.colors.green} />

      <CenterModal
        isOpen={modal}
        onDismiss={handleToggleModal}
        contentTransition={{
          from: { opacity: 0, transform: 'translateY(-100%) scale(0)' },
          enter: { opacity: 1, transform: 'translateY(0) scale(1)' },
          leave: { opacity: 0, transform: 'translateY(-100%) scale(0)' },
        }}
      >
        <p>
          This is a modal made with <code>react-spring-modal</code> and served
          via SSR. The modal itself is using the default styles for{' '}
          <code>&lt;CenterModal&gt;</code> imported via{' '}
          <code>react-spring-modal/styles.css</code>.
        </p>

        <ModalCloseTarget>
          <button>Exit</button>
        </ModalCloseTarget>
      </CenterModal>
    </Container>
  )
}
