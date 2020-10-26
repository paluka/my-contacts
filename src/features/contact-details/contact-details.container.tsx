import { connect } from 'react-redux';

import { contactDetailsConnector } from './contact-details.selectors';
import ContactDetailsComponent from './contact-details.component';

export default connect(contactDetailsConnector)(ContactDetailsComponent);
