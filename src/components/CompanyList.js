import React, { Component } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

const NewColumn = styled(Grid.Column)`
  padding: 0px !important;
`

const MSegment = styled(Segment)`
  margin: 0px !important;
  cursor: pointer;
`
const NewDiv = styled.div`
  padding : 2px;
`
const Emoge = styled.div`
  font-Size: 50px;
  text-Align: center;
  margin-top: 25px;
`

const NewUl = styled.ul`
  list-style: none;
  display: flex;
  padding : 0px;
  margin : 0px;
  margin-left: 4px;
`

export default class CompanyList extends Component {
  static defaultProps = {
    companies: [],
    onMount: () => { },
    onCompanyClick: () => { },
  }

  render() {
    const { companies, onCompanyClick } = this.props;
    return (
      <Segment>
        {
          companies.map(({
        id, name, group, address, scrapScore, reviewScore, emotionScore, itemProps = {},
         }) => (
        <MSegment key={id} onClick={e => onCompanyClick(id)} {...itemProps}>
          <Grid>
            <Grid.Row stretched>
              <NewColumn width={10} style={{marginLeft: '25px'}}>
                <NewDiv style={{ fontFamily: 'Spoqa-Han-Sans-Bold', fontSize: '1.3rem'}}>{name}</NewDiv>
                <NewUl>
                  <li><NewDiv>{address}</NewDiv><NewDiv><Icon name='pencil' size='large' />{reviewScore}</NewDiv></li>
                  <li style={{marginLeft:'24px', textAlign:'center'}}><NewDiv>{group}</NewDiv><NewDiv><Icon name='empty star' size='large' />{scrapScore}</NewDiv></li>
                </NewUl>
              </NewColumn>
              <NewColumn width={3}>
                <Emoge>{emotionScore}</Emoge>
              </NewColumn>
            </Grid.Row>
          </Grid>
        </MSegment>
         ))
        }
      </Segment>
    )
  }
}
