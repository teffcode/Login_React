import React from 'react'
import { Grid, Image, Label, Segment } from 'semantic-ui-react'

const LabelRibbon = () => (
  <Grid columns={1}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>Overview</Label>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default LabelRibbon