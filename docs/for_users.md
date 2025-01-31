---
sidebar_position: 7
---
# For Users

HySDS (Hybrid Cloud Science Data Processing System) is an open source science data processing system designed for large-scale Earth Science data processing. This guide will help you understand how to use HySDS effectively for your data processing needs.

## Getting Started

### What is HySDS?
HySDS enables:
- Large-scale science data processing (300TB+ per day)
- Parallel processing across thousands of nodes
- Hybrid cloud and on-premise processing
- Machine learning and GPU processing
- Low-latency urgent response processing
- On-demand processing capabilities

### Access Requirements
- System access credentials
- Appropriate permissions for your project
- Network access to required resources

## Using HySDS

### Data Discovery

#### Using the GRQ Interface
1. Navigate to the GRQ (Geo Region Query) interface
2. Use the faceted search to find datasets:
   - Filter by data type
   - Filter by date range
   - Filter by geographic area
   - Filter by processing level
3. Review search results
4. Select datasets for processing

#### Search Tips
- Use wildcards for broader searches
- Combine multiple filters for precise results
- Save common searches for future use
- Export search results if needed

### Submitting Jobs

#### Basic Job Submission
1. Select your processing algorithm/PGE
2. Choose input data
3. Set processing parameters
4. Submit the job
5. Monitor job progress

#### Job Types
- On-demand processing
- Bulk processing
- Urgent response processing
- Reprocessing campaigns

### Monitoring Your Jobs

#### Job Status Dashboard
- View active jobs
- Check job status
- Monitor processing progress
- Access job logs
- View resource utilization

#### Status Definitions
- `PENDING`: Job is queued
- `RUNNING`: Job is actively processing
- `COMPLETED`: Job finished successfully
- `FAILED`: Job encountered an error
- `REVOKED`: Job was cancelled

### Accessing Results

#### Finding Processed Data
1. Use GRQ to search for your job outputs
2. Filter by job ID or processing date
3. Download or access results
4. Verify data completeness

#### Data Formats
- Review available output formats
- Check data specifications
- Verify product metadata
- Access associated browse products

## Advanced Features

### Setting Up Triggers

#### Automated Processing Rules
1. Define input criteria
2. Set processing parameters
3. Configure output handling
4. Activate the trigger

#### Types of Triggers
- New data triggers
- Geographic area monitoring
- Temporal triggers
- Event-based triggers

### Using the API

#### Basic API Usage
- Authentication
- Job submission
- Status checking
- Result retrieval

#### API Best Practices
- Rate limiting considerations
- Error handling
- Batch operations
- Resource management

## Best Practices

### Job Management
1. Start with small test jobs
2. Monitor resource usage
3. Use appropriate queue priorities
4. Clean up completed jobs

### Data Management
1. Verify input data quality
2. Monitor storage usage
3. Archive results promptly
4. Document processing steps

## Troubleshooting

### Common Issues

#### Job Failures
- Check input data availability
- Verify parameter settings
- Review resource allocations
- Check error logs

#### Performance Issues
- Monitor queue status
- Check resource availability
- Verify data access
- Review job configuration

### Getting Help
1. Check documentation
2. Review error messages
3. Contact support team
4. Join community discussions

## Resources

### Documentation
- User manuals
- API documentation
- Example workflows
- Best practices guides

### Community Support
- Slack channels: #hysds-community, #hysds-general
- Issue tracking system
- Community wiki
- Regular user meetings

### Training Materials
- Tutorials
- Video guides
- Example notebooks
- Sample workflows

## Project Examples

### Sample Use Cases
- NISAR data processing
- SWOT data production
- OCO-2/3 reprocessing
- SMAP data processing
- On-demand product generation

### Success Stories
- Processing 2PB+ of SWOT data
- Supporting 300TB/day for NISAR
- Scaling to 8,000+ parallel nodes
- Multi-mission support

## Security and Privacy

### Data Protection
- Access control
- Data encryption
- Privacy considerations
- Usage tracking

### Best Practices
- Credential management
- Secure data handling
- Resource isolation
- Access logging

## Getting Additional Help

### Support Channels
1. Documentation resources
2. Community forums
3. Support tickets
4. User group meetings

### Feedback and Contributions
- Feature requests
- Bug reports
- Documentation improvements
- Community sharing

## Appendix

### Glossary
- Common terms
- System components
- Processing terminology
- Technical acronyms

### Quick Reference
- Common commands
- Useful queries
- Status codes
- Error messages

Remember to check the [community wiki](https://hysds-core.atlassian.net/) for the latest updates and detailed information about specific features or workflows.