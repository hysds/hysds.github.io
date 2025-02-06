---
sidebar_position: 5
---
# For Developers

HySDS (Hybrid Cloud Science Data Processing System) is an open source science data processing system used across many large-scale Earth Science missions. This guide provides key information for developers looking to work with or contribute to HySDS.

## Key Components

### Core Architecture
- **GRQ (Geo Region Query)**: Geospatial data catalog and management system
  - Provides faceted search of data
  - Enables production rules evaluation and triggers
  - Handles data product metadata

- **Mozart**: Job management system
  - Faceted search for job management
  - Production rules evaluation and actions
  - Queue management

- **Metrics**: Runtime analytics
  - Real-time job metrics
  - Worker metrics tracking
  - Performance monitoring

- **Factotum**: "Hot" helper workers
  - Maintains workers for low-latency processes
  - Assists with job management

- **Verdi Workers**: Distributed compute nodes
  - Runs Product Generation Executables (PGEs) at scale
  - Handles data staging and processing
  - Auto-scales based on workload

## Development Environment

### Source Code Access
- Main repository: https://github.com/hysds/
- Releases: https://github.com/hysds/hysds-framework/releases
- Community wiki: https://hysds-core.atlassian.net/
- Issue tracking: https://hysds-core.atlassian.net/jira/software/c/projects/HC/issues

### Container Support
- Docker support for cloud deployments
- Podman support for HPC environments
- Singularity/Apptainer support for specific HPC deployments

## Key Development Concepts

### Job Processing Flow
1. Jobs are submitted to queues
2. Each queue is backed by an auto-scaling group (ASG)
3. Queue-ASG pairs represent specific job types
4. Jobs are processed by Verdi workers
5. Workers scale up/down based on workload

### Trigger Rules System
- **Monitoring Triggers**: Automatically evaluate new data
- **On-demand Triggers**: Manual triggering based on search criteria
- **Job State Change Triggers**: React to changes in job status

### Auto-scaling Implementation
#### Scale Up Logic
- Based on PCM queue backlog
- Target tracking increases auto-scaling to desired fleet size
- Supports both cloud and HPC environments

#### Scale Down Logic
- Based on worker idle time
- Workers self-terminate after timeout
- Graceful shutdown process

## Best Practices

### Development Guidelines
1. Follow existing code style and patterns
2. Write comprehensive tests
3. Document all new features and changes
4. Use proper error handling and logging
5. Consider both cloud and HPC compatibility

### Contributing
1. Join community discussions
2. Submit pull requests through GitHub
3. Follow the project's coding standards
4. Update documentation for changes
5. Participate in bi-weekly coordination meetings

### Deployment Considerations
- Support for hybrid cloud/on-premise operations
- Consider security implications
- Plan for proper monitoring and logging
- Implement appropriate error handling
- Design for scalability

## Resource Management

### Data Management
- Use appropriate storage solutions for different data types
- Implement efficient data staging
- Consider data locality for processing
- Handle proper cleanup of temporary data

### Job Management
- Implement proper queue management
- Handle job dependencies correctly
- Provide adequate monitoring
- Implement proper error handling and recovery

## Integration Points

### External Systems
- Support for various cloud providers (AWS, GCP, Azure)
- Integration with HPC systems
- Support for various data archives and DAACs
- Integration with monitoring systems

### APIs and Interfaces
- REST APIs for job management
- Metrics collection endpoints
- Data catalog interfaces
- Processing status APIs

## Testing and Validation

### Testing Requirements
1. Unit tests for components
2. Integration tests for workflows
3. Performance testing for scalability
4. Security testing for deployments

### Monitoring and Debugging
1. Use logging effectively
2. Monitor system metrics
3. Track job performance
4. Debug deployment issues

## Security Considerations

### Authentication and Authorization
- Implement proper access controls
- Handle credentials securely
- Follow security best practices
- Support various authentication methods

### Network Security
- Secure communication between components
- Handle firewalls and network restrictions
- Implement proper encryption
- Consider cloud security groups

## Performance Optimization

### Resource Utilization
- Optimize compute resource usage
- Manage memory effectively
- Handle storage efficiently
- Monitor network usage

### Scaling Considerations
- Design for horizontal scaling
- Handle state management
- Consider data locality
- Implement proper caching

## Troubleshooting Guide

### Common Issues
1. Job failures
2. Scaling problems
3. Network connectivity
4. Resource exhaustion

### Debug Procedures
1. Check logs
2. Monitor metrics
3. Verify configurations
4. Test connectivity

## Additional Resources
- Community Slack channels
- Developer documentation
- API documentation
- Example implementations

Remember to check the [official documentation](https://hysds-core.atlassian.net/) for the most up-to-date information and best practices.
