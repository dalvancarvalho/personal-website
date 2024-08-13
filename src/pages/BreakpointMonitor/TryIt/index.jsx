/* TryIt/index.jsx */

import { TwBreakpointMonitor } from 'tw-breakpoint-monitor'

import { useDemo } from './hooks/useDemo'

import { Section } from '../../../layout/Section/Regular'
import { Container } from '../../../layout/Container'

import { Heading } from '../../../components/Text/Heading'
import { Paragraph } from '../../../components/Text/Paragraph'
import { ActiveToggle } from './components/ActiveToggle'
import { PositionToggle } from './components/PositionToggle'
import { TransparencyToggle } from './components/TransparencyToggle'

export function TryIt() {
  //

  const { active, position, transparency, ...handlers } = useDemo()

  return (
    <>
      <Section className="skewed-bg" id="install">
        <Container className="h-full variable-padding">
          <Heading
            animate={false}
            heading="pages.breakpointMonitor.install.heading"
            sectionName="pages.breakpointMonitor.install.sectionName"
            sectionNameColor="text-slate-250 dark:text-dark-3"
          />
          <Paragraph i18nKey="misc.comingSoon" />
          <ActiveToggle handleActive={handlers.handleActive} />
          <PositionToggle handlePosition={handlers.handlePosition} />
          <TransparencyToggle handleTransparency={handlers.handleTransparency} />
        </Container>
      </Section>
      {active && <TwBreakpointMonitor position={position} transparency={transparency} />}
    </>
  )
}
