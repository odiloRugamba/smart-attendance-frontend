import React from 'react';

import { Table, Card, Button,UncontrolledDropdown,Nav,  NavItem, Pagination, Badge,Col,PaginationItem, NavLink, Row,DropdownMenu, DropdownToggle} from 'reactstrap';
import { PageTitle } from '../../layout-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Select from 'react-select';


    import { ArrowDownRight, ArrowUpRight, Settings, Filter, Edit, Save, Search, Star, ArrowDownCircle, ArrowUpCircle, Circle } from 'react-feather';

    export default function LivePreviewExample() {

        const searchTypeOptions = [
            { value: 'any', label: 'All types' },
            { value: 'deposit', label: 'Deposit' },
            { value: 'buy', label: 'Buy Crypto' },
            { value: 'sell', label: 'Sell Crypto' },
            { value: 'withdraw', label: 'Withdraw' },
            { value: 'transfer', label: 'Transfer Funds' }
        ];

        const statusOptions = [
            { value: 'any', label: 'All statuses' },
            { value: 'pending', label: 'Pending' },
            { value: 'completed', label: 'Completed' },
            { value: 'rejected', label: 'Rejected' },
            { value: 'processing', label: 'Processing' },
            { value: 'cancelled', label: 'Cancelled' }
        ];

        return (
            <>

                <Card className="card-box mb-5">
                    <div className="p-4">
                        <Row>
                            <Col md="4">
                                <small className="font-weight-bold pb-2 text-uppercase text-primary d-block">
                                    Type
                                </small>
                                <Select
                                    placeholder="Select..."
                                    options={searchTypeOptions}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: '0.29rem',
                                        borderWidth: 1,
                                        colors: {
                                            ...theme.colors,
                                            primary25: 'rgba(60,68,177,0.15)',
                                            primary50: 'rgba(60,68,177,0.15)',
                                            primary: '#3c44b1'
                                        }
                                    })}
                                />
                            </Col>
                            <Col md="4">
                                <small className="font-weight-bold pb-2 text-uppercase text-primary d-block">
                                    Status
                                </small>
                                <Select
                                    placeholder="Select..."
                                    options={statusOptions}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: '0.29rem',
                                        borderWidth: 1,
                                        colors: {
                                            ...theme.colors,
                                            primary25: 'rgba(60,68,177,0.15)',
                                            primary50: 'rgba(60,68,177,0.15)',
                                            primary: '#3c44b1'
                                        }
                                    })}
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="divider" />
                    <div className="p-4 text-center d-flex justify-content-center bg-secondary">
                        <UncontrolledDropdown>
                            <DropdownToggle size="sm" color="primary" className="d-flex mr-3 btn-icon d-40 p-0 align-items-center justify-content-center">
                                <Filter className="w-50" />
                            </DropdownToggle>
                            <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
                                <div className="font-weight-bold px-4 pt-3">Results</div>
                                <Nav className="nav-neutral-first nav-pills-rounded flex-column p-2">
                                    <NavItem>
                                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                                            <div className="nav-link-icon mr-2">
                                                <Circle />
                                            </div>
                                            <span className="font-size-md"><b>10</b> results per page</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                                            <div className="nav-link-icon mr-2">
                                                <Circle />
                                            </div>
                                            <span className="font-size-md"><b>20</b> results per page</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                                            <div className="nav-link-icon mr-2">
                                                <Circle />
                                            </div>
                                            <span className="font-size-md"><b>30</b> results per page</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <div className="divider" />
                                <div className="font-weight-bold px-4 pt-4">Order</div>
                                <Nav className="nav-neutral-first nav-pills-rounded flex-column p-2">
                                    <NavItem>
                                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                                            <div className="nav-link-icon mr-2">
                                                <ArrowUpCircle />
                                            </div>
                                            <span className="font-size-md">Ascending</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                                            <div className="nav-link-icon mr-2">
                                                <ArrowDownCircle />
                                            </div>
                                            <span className="font-size-md">Descending</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <Button color="primary" size="sm">
                            Filter results
                        </Button>
                    </div>
                    <div className="divider" />
                    <div className="p-3">
                        <Row>
                            <Col md="4">
                                <Nav className="nav-neutral-danger flex-column p-0">
                                    <NavItem>
                                        <NavLink className="d-flex rounded-sm justify-content-center" href="#/" onClick={e => e.preventDefault()}>
                                            <span className="font-weight-bold">Last Week</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="4">
                                <Nav className="nav-neutral-warning flex-column p-0">
                                    <NavItem>
                                        <NavLink className="d-flex rounded-sm justify-content-center" href="#/" onClick={e => e.preventDefault()}>
                                            <span className="font-weight-bold">Yesterday</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="4">
                                <Nav className="nav-neutral-success flex-column p-0">
                                    <NavItem>
                                        <NavLink className="active d-flex rounded-sm justify-content-center" href="#/" onClick={e => e.preventDefault()}>
                                            <span className="font-weight-bold">Today</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </div>
                    <div className="divider" />



                    <div className="pt-4 px-4">
                        <Table responsive className="table-alternate-spaced mb-0">
                            <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
                            <tr>
                                <th className="text-left px-4">Order details</th>
                                <th className="text-left">Source</th>
                                <th className="text-left">Order ID</th>
                                <th className="text-right">Balance</th>
                                <th className="text-right">Amount</th>
                                <th className="text-right">Balance</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="px-4">
                                    <div className="d-flex align-items-center">
                                        <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-success text-success">
                                            <ArrowUpRight />
                                        </div>
                                        <div>
                                            <div className="font-size-sm font-weight-bold">Fiat deposit</div>
                                            <div className="font-size-sm opacity-7">17 Feb 2020 | 10:45 PM</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-left">
                                    <div>
                                        <div className="font-size-sm font-weight-bold">Bank Account</div>
                                        <div className="font-size-sm opacity-7">****1111</div>
                                    </div>
                                </td>
                                <td className="text-left">
                                    <div>
                                        <div className="font-size-sm font-weight-bold">54XHGSA34GJ</div>
                                        <div className="font-size-sm opacity-7 text-success d-flex align-items-center">
                                            <Badge color="success" className="mr-1 border-0 badge-circle">Deposit</Badge>
                                            Deposit
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <Badge className="px-4 py-1 h-auto text-success text-capitalize font-size-sm border-0" color="neutral-success">Completed</Badge>
                                </td>
                                <td className="text-right">
                                    <div className="font-size-sm font-weight-bold">+ 0.349854 BTC</div>
                                    <div className="font-size-sm opacity-7">1,296 USD</div>
                                </td>
                                <td className="text-right">
                                    <div className="font-size-sm font-weight-bold">12.454539 BTC</div>
                                    <div className="font-size-sm opacity-7">26,349 USD</div>
                                </td>
                                <td className="text-center">
                                    <Button color="neutral-primary" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={['fas', 'search']} className="font-size-sm" />
                                    </Button>
                                    <Button color="neutral-first" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
                                    </Button>
                                    <Button color="neutral-danger" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={['fas', 'times']} className="font-size-sm" />
                                    </Button>
                                </td>
                            </tr>
                            <tr className="divider"></tr>
                            <tr>
                                <td className="px-4">
                                    <div className="d-flex align-items-center">
                                        <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-first text-first">
                                            <ArrowDownRight />
                                        </div>
                                        <div>
                                            <div className="font-size-sm font-weight-bold">Paypal withdraw</div>
                                            <div className="font-size-sm opacity-7">18 March 2020 | 11:26 PM</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-left">
                                    <div>
                                        <div className="font-size-sm font-weight-bold">Crypto Wallet</div>
                                        <div className="font-size-sm opacity-7">My Bitcoin Wallet</div>
                                    </div>
                                </td>
                                <td className="text-left">
                                    <div>
                                        <div className="font-size-sm font-weight-bold">39FJDSHE84HA</div>
                                        <div className="font-size-sm opacity-7 text-danger d-flex align-items-center">
                                            <Badge color="danger" className="mr-1 border-0 badge-circle">Withdraw</Badge>
                                            Withdraw
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right">
                                    <Badge className="px-4 py-1 h-auto text-warning text-capitalize font-size-sm border-0" color="neutral-warning">Pending</Badge>
                                </td>
                                <td className="text-right">
                                    <div className="font-size-sm font-weight-bold">+ 45,459 USD</div>
                                    <div className="font-size-sm opacity-7">45,273 BTC</div>
                                </td>
                                <td className="text-right">
                                    <div className="font-size-sm font-weight-bold">346.274 USD</div>
                                    <div className="font-size-sm opacity-7">26,349 BTC</div>
                                </td>
                                <td className="text-center">
                                    <Button color="neutral-primary" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={['fas', 'search']} className="font-size-sm" />
                                    </Button>
                                    <Button color="neutral-first" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={['far', 'edit']} className="font-size-sm" />
                                    </Button>
                                    <Button color="neutral-danger" className="mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={['fas', 'times']} className="font-size-sm" />
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="mt-3" />
                    <div className="card-footer bg-secondary p-4 d-flex justify-content-center">
          
                    </div>
                </Card>


            </>
        );
    }